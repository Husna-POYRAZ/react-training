import React, { Component } from "react";
import { Input } from "reactstrap";

export default class UserForm extends Component {
  state = { userName: "", city: "" };

  onChangeHandeler = (event) => {
    // event'e sebep olan nesnenin (input) değerini al ve userName'i set et
    //this.setState({ userName: event.target.value });

    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  onSubmitHandeler = (event) => {
    // form submit edildiğinde sayfanın yeniden yüklenmesini engeller
    event.preventDefault();
    alert(this.state.userName + " : " + this.state.city);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandeler}>
          <h3>User Name</h3>
          {/* girilen text'i userName'e değişkeninde tut */}
          {/* onChangeHanler kısmında name olarak state bulunana değişkenler alınır. Bunun için ilgili değişken için name tanımlanır. Bu tanımlanan name, state deki isim ile birebir aynı olmalıdır. */}
          <input
            name="userName"
            type="text"
            onChange={this.onChangeHandeler}
          ></input>
          <h3>User Name is {this.state.userName}</h3>

          <input
            name="city"
            type="text"
            onChange={this.onChangeHandeler}
          ></input>
          <h3>City is {this.state.city}</h3>

          <Input type="submit" value="Save"></Input>
        </form>
      </div>
    );
  }
}
