import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  state = {
    categories: [],
  };

  // verileri apiden getirme işlemi
  getCategories = () => {
    // apiye ulaşma
    fetch("http://localhost:3000/categories")
      // gelen veriyi json'a döndür
      .then((response) => response.json())
      // sonra categories'in state değerini json'a göre değiştir
      .then((data) => this.setState({ categories: data }));
  };

  // Life Cycle Evet
  // önce componentler yerleşir sonra render() lar çalışlır.
  // component yerleştikten sonra verileri (kategorileri) getir
  componentDidMount() {
    this.getCategories();
  }

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>

        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              key={category.id}
              onClick={() => this.props.changeCategory(category)}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
