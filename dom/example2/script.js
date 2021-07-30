let users = [
  {
    profile: {
      fullname: "Hamid",
      email: "hamid@gmail.com",
      password: "234567jhedcdfjkgvas_dgshcdsv§WE$%&/§",
    },
    orders: [
      {
        products: [
          {
            quantity: 5,
            price: 15,
            label: "mouse",
          },

          {
            quantity: 13,
            price: 35,
            label: "keyboard",
          },
        ],

        total: function () {
          let t = 0;
          for (const product of this.products) {
            t += product.price * product.quantity;
          }
          return t;
        },
      },

      {
        products: [
          {
            quantity: 7,
            price: 9,
            label: "mouse",
          },

          {
            quantity: 5,
            price: 11,
            label: "keyboard",
          },
        ],

        total: function () {
          let t = 0;
          for (let i = 0; i < this.products.length; i++) {
            t += this.products[i].price * this.products[i].quantity;
          }
          return t;
        },
      },
    ],

    totalAll: function () {
      let t = 0;
      for (let i = 0; i < this.orders.length; i++) {
        t += this.orders[i].total();
      }

      return t;
    },
  },
];

function initListUsers() {
  let listUsers = document.getElementById("listUsers");
  for (const user of users) {
    listUsers.innerHTML += "<option>" + user.profile.fullname + "</option>";
  }
}

function initTableProducts() {
  let productsTable = document.getElementById("tableProducts");
  productsTable.innerHTML = `<tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>`;
  for (const [index, product] of users[0].orders[0].products.entries()) {
    let tr = `<tr>
      <td>${product.label}</td>
      <td>${product.price}</td>
      <td>${product.quantity}</td>
      <td>${product.price * product.quantity}</td>
      <td><button onclick="deleteProduct(${index})">Delete</button></td>
    </tr>`;

    productsTable.innerHTML += tr;
  }
}

function deleteProduct(index) {
  users[0].orders[0].products.splice(index, 1);
  initTableProducts();
}

initListUsers();
initTableProducts();
