import "jquery/dist/jquery.slim.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link } from "react-router-dom";
function Header() {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-light bg-white w-100 navigation"
      id="navbar"
    >
      <div class="container">
        <Link class="navbar-brand font-weight-bold" to={{ pathname: "/" }}>
          E-Wears
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#main-navbar"
          aria-controls="main-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse " id="main-navbar">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                Trending offers
              </a>
            </li>

            <li class="nav-item dropdown dropdown-slide">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown4"
                role="button"
                data-delay="350"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Electronics
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown4">
                <li>
                  <a href="#">Laptop</a>
                </li>
                <li>
                  <a href="#">TV</a>
                </li>
                <li>
                  <a href="#">Headphone</a>
                </li>
                <li>
                  <a href="#">Trimmer</a>
                </li>
                <li>
                  <a href="#">Mouse</a>
                </li>
                <li>
                  <a href="#">Keyboard</a>
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown dropdown-slide">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown3"
                role="button"
                data-delay="350"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Fashion
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown4">
                <li>
                  <a href="#">Women's Topwear</a>
                </li>
                <li>
                  <a href="#">Men's Topwear</a>
                </li>
                <li>
                  <a href="#">Women's Footwear</a>
                </li>
                <li>
                  <a href="#">Men's Footwear</a>
                </li>
                <li>
                  <a href="#">Kids</a>
                </li>
                <li>
                  <a href="#">Bags</a>
                </li>
                <li>
                  <a href="#">Jewellerys</a>
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown dropdown-slide">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown3"
                role="button"
                data-delay="350"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Grocery
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown4">
                <li>
                  <a href="#">Salt</a>
                </li>
                <li>
                  <a href="#">Sugar</a>
                </li>
                <li>
                  <a href="#">Soaps</a>
                </li>
                <li>
                  <a href="#">Oils</a>
                </li>
                <li>
                  <a href="#">Toilet Cleaners</a>
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown dropdown-slide">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown5"
                role="button"
                data-delay="350"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Account
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown5">
                <li>
                  <a href="#">Login Page</a>
                </li>
                <li>
                  <a href="#">SignUp Page</a>
                </li>
                <li>
                  <a href="#">Forget Password</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <ul class="top-menu list-inline mb-0 d-none d-lg-block" id="top-menu">
          <li class="list-inline-item">
            <a href="#" class="search_toggle" id="search-icon">
              <i class="tf-ion-android-search"></i>
            </a>
          </li>

          <li class="dropdown cart-nav dropdown-slide list-inline-item">
            <a
              href="#"
              class="dropdown-toggle cart-icon"
              data-toggle="dropdown"
              data-hover="dropdown"
            >
              <i class="tf-ion-android-cart"></i>
            </a>
            <div class="dropdown-menu cart-dropdown">
              <div class="media">
                <a href="/product-single">
                  <img
                    class="media-object img- mr-3"
                    src="assets/images/cart-1.jpg"
                    alt="image"
                  />
                </a>
                <div class="media-body">
                  <h6>Ladies Bag</h6>
                  <div class="cart-price">
                    <span>1 x</span>
                    <span>1250.00</span>
                  </div>
                </div>
                <a href="#" class="remove">
                  <i class="tf-ion-close"></i>
                </a>
              </div>

              <div class="media">
                <a href="/product-single">
                  <img
                    class="media-object img-fluid mr-3"
                    src="assets/images/cart-2.jpg"
                    alt="image"
                  />
                </a>
                <div class="media-body">
                  <h6>Skinny Jeans</h6>
                  <div class="cart-price">
                    <span>1 x</span>
                    <span>1250.00</span>
                  </div>
                </div>
                <a href="#" class="remove">
                  <i class="tf-ion-close"></i>
                </a>
              </div>

              <div class="cart-summary">
                <span class="h6">Total</span>
                <span class="total-price h6">Rs 1,799</span>

                <div class="text-center cart-buttons mt-3">
                  <a href="#" class="btn btn-small btn-transparent btn-block">
                    View Cart
                  </a>
                  <a href="#" class="btn btn-small btn-main btn-block">
                    Checkout
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li class="list-inline-item">
            <a href="#">
              <i class="tf-ion-ios-person mr-3"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
