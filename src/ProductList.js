import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h3>
          {/* currencyCategory bilgisi CategoryList.js componentinden gelmektedir. Bu neden ana component üzerinde CategoryList.js den currencyCategory bilgisi alınıp daha sonra ProductList.js componentine iletilmektedir. Gerçekleştirme adımları:
        1. App.js üzerinde state olarak bu durum tutuldu.
        2. currencyCategory bilgisini set eden bir method yazıldı
        3. Bu method CategoryList.js üzerinde çağırıldı.
        4. Tablo üzerinde her tıklamada currencyCategory değişeceği için currencyCategory tıklamaya göre method ile set edildi
        5. Ana component üzerinden ProcuctList.js componente bu state props ile gönderildi, aşağıda kullanımı görülmekte */}
          {this.props.currencyCategory} {this.props.info.title}
        </h3>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Quantity Per Unit</th>
              <th>Unit Price</th>
              <th>Units In Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* Gelen json datayı maple */}
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td>
                  <div>
                    {/* "Add to Cart" butonuna tıklandığında, ilgili ürün için addToCart methodunu çağırarak ürün adını gösterir*/}
                    <Button
                      onClick={() => this.props.addToCart(product)}
                      color="primary"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
