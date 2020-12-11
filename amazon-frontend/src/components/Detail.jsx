import React, { Component } from "react";

export default class Detail extends Component {
  state = {
    product: {
      name: "",
      description: "",
      brand: "",
      price: 0,
      category: "",
    },
  };

  async componentDidMount() {
    await fetch("http://localhost:3077/products" + this.props.match.params.id, {
      Methot: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ products: data });
      })
      .catch((errors) => console.log(errors));
  }

  render() {
    return (
      <div>
        <div class="col my-3">
          <div class="card" style="height: 100%; width: 50rem;">
            <img
              src={this.state.products.imageUrl}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">${this.state.products.name}</h5>
              <h5 class="card-title">${this.state.products.brand}</h5>
              <p class="card-text">
                <b>Description:</b> <br />
                <small>${this.state.products.description}</small>
              </p>
              <p class="card-text">
                <b>Price:</b> ${this.state.products.price}$
              </p>
              <a onclick="handleEdit()" class="btn btn-primary mr-5">
                Edit product
              </a>
              <a onclick="handleDelete()" class="btn btn-primary ml-5">
                Delete product
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
