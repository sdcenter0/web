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
          /*
          for (let i = 0; i < this.products.length; i++) {
            t += this.products[i].price * this.products[i].quantity;
          }*/

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

console.log("Total All is: " + users[0].totalAll());

/*
let user = {
  fullname: "ALI",
  email: "ali@gmail.com",
  password: "fgasd3835zgswkdxbdz",
  posts: [
    {
      title: "dckjdfh",
      body: "dhcvdscghs",
      published_at: "05/08/2017",
      comments: [
          {
              commented_a: "",
              user: {

              },
              comment_text: ""
          }
      ]
    },
    {
      title: "dckjdfh",
      body: "dhcvdscghs",
      published_at: "05/08/2017",
    },
    {
      title: "dckjdfh",
      body: "dhcvdscghs",
      published_at: "05/08/2017",
    },
    {
      title: "dckjdfh",
      body: "dhcvdscghs",
      published_at: "05/08/2017",
    },
  ],
};
*/
