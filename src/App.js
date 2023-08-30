import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import NotFoundPage from "./NotFoundPage";
import CartListDetail from "./CartListDetail";
import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs";
import { Switch, Route } from "react-router-dom";
import UserRegisterForm from "./UserRegisterForm";

export default class App extends Component {
  state = { currencyCategory: "", products: [], cart: [] };

  changeCategory = (category) => {
    this.setState({ currencyCategory: category.categoryName });
    //console.log(category);
    this.getProducts(category.id);
  };
  //currencyCategory'e göre prods değişerek ürün filtrelenmesi yapılacağı için bu method ana component'te
  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  componentDidMount() {
    this.getProducts();
  }

  // state kısmında cart adında bir sepet için değişken tanımlandı. App.js üzerinde kullanıcı ProductList.js componentinde listelenen ürünlere ait Add to Cart butonuna basması ile bu method tetiklenir. Butana tıklanan ürün diziye eklenir.
  addToCart = (product) => {
    // ürün dizisini al
    let newCart = this.state.cart;
    // ürün daha önce sepete eklenmiş mi?
    var addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
    // sepete eklenen ürün 2 sn ekranda eklendiğine dair bilgilendirecek
    alertify.success(product.productName + " added to cart!", 2);
  };

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error(product.productName + " removed from cart!");
  };

  render() {
    let categoryInfo = { title: "Category List" };
    let productInfo = { title: "Product List", description: "Empty List" };
    return (
      <div className="App">
        <Container>
          <Navi cart={this.state.cart} removeFromCart={this.removeFromCart} />

          <Row>
            <Col xs="3">
              <CategoryList
                currencyCategory={this.state.currencyCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>

            <Col xs="9">
              {/* Switch sırası ile routeları gezinir */}
              <Switch>
                {/*  exact özelliği, yalnızca tam olarak eşleşen URL'lerde bu route'un render edilmesini sağlar. */}
                <Route
                  path="/"
                  exact
                  // route eşleştiğinde bu route için ilgili component ve proplar render et
                  render={(props) => (
                    <ProductList
                      // gönderilen props ların kopyasını alma
                      {...props}
                      currencyCategory={this.state.currencyCategory}
                      products={this.state.products}
                      addToCart={this.addToCart}
                      info={productInfo}
                    />
                  )}
                />

                <Route
                  path="/cart"
                  exact
                  render={(props) => (
                    <CartListDetail
                      {...props}
                      cart={this.state.cart}
                      removeFromCart={this.removeFromCart}
                    />
                  )}
                />
                <Route path="/user-register" component={UserRegisterForm} />
                <Route component={NotFoundPage}></Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
