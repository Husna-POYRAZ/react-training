import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
  state = { currencyCategory: "", products: [] };

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

  render() {
    let categoryInfo = { title: "Category List" };
    let productInfo = { title: "Product List", description: "Empty List" };
    return (
      <div className="App">
        <Container>
          <Row>
            <Navi />
          </Row>

          <Row>
            <Col xs="3">
              <CategoryList
                currencyCategory={this.state.currencyCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>

            <Col xs="9">
              <ProductList
                currencyCategory={this.state.currencyCategory}
                products={this.state.products}
                info={productInfo}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
