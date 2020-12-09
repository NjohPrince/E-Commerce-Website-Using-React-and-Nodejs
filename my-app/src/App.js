import './App.css';

function App() {
  return (
    <div className="grid-container">
        <header className="header">
            <div className="brand">
                <button onClick={openMenu}>
                    &#9776;
                </button>
                <a href="index.html">Vehicles Pro</a>
            </div>
            <div className="header-links">
                <a href="cart.html">Cart</a>
                <a className="login" href="login.html">Login</a>
                <a className="btn" href="signUp.html">Sign Up</a>
                <a className="developer" href="developer.html">Developer</a>
            </div>
        </header>
        <aside className="side-bar">
            <h3>Shopping Categories</h3>
            <button className="close-side-bar" onClick={closeMenu}>
                X
            </button>
            <ul>
                <li><a href="index.html">Cars</a></li>
                <li><a href="index.html">Motocycles</a></li>
                <li><a href="index.html">Tractors</a></li>
                <li><a href="index.html">Sports Motocycles</a></li>
            </ul>
            <div className="L-S-D-container">
                <a href="login.html">Login</a>
                <a href="developer.html">Developer</a>
                <a className="btn" href="signUp.html">Sign Up</a>
            </div>
        </aside>
        <main className="main">
            <div className="products-container">
                <ul className="products">
                    <li className="product">
                        <img className="product-image" src="images/motorcycle.png" alt="product" />
                        <div className="product-name">
                            <a href="product.html">Motorcycle</a>
                        </div>
                        <div className="product-brand">Ghost Rider</div>
                        <div className="product-price">$455</div>
                        <div className="product-rating">Number of Stars  5 reviews </div> 
                    </li>
                    <li className="product">
                        <img className="product-image" src="images/ford.png" alt="product" />
                        <div className="product-name">
                            <a href="product.html">Car</a>
                        </div>
                        <div className="product-brand">Ford</div>
                        <div className="product-price">$678</div>
                        <div className="product-rating">Number of Stars  8 reviews </div>
                    </li>
                    <li className="product">
                        <img className="product-image" src="images/motorcycle2.png" alt="product" />
                        <div className="product-name">
                            <a href="product.html">Motorcycle</a>
                        </div>
                        <div className="product-brand">Ghost Rider</div>
                        <div className="product-price">$464</div>
                        <div className="product-rating">Number of Stars  3 reviews </div>
                    </li>
                    <li className="product">
                        <img className="product-image" src="images/fordBig.png" alt="product" />
                        <div className="product-name">
                            <a href="product.html">Big Car</a>
                        </div>
                        <div className="product-brand">Ford</div>
                        <div className="product-price">$559</div>
                        <div className="product-rating">Number of Stars  3 reviews </div>
                    </li>
                    <li className="product">
                        <img className="product-image" src="images/fordOpen.png" alt="product" />
                        <div className="product-name">
                            <a href="product.html">Lorry Ford</a>
                        </div>
                        <div className="product-brand">Ford</div>
                        <div className="product-price">$554</div>
                        <div className="product-rating">Number of Stars  4 reviews </div>
                    </li>
                    <li className="product">
                        <img className="product-image" src="images/tractorGo.png" alt="product" />
                        <div className="product-name">
                            <a href="product.html">Tractor Go</a>
                        </div>
                        <div className="product-brand">Tractor</div>
                        <div className="product-price">$875</div>
                        <div className="product-rating">Number of Stars  7 reviews </div>
                    </li>
                    <li className="product">
                        <img className="product-image" src="images/tractors.png" alt="product" />
                        <div className="product-name">
                            <a href="product.html">Tractor Div</a>
                        </div>
                        <div className="product-brand">Tractor</div>
                        <div className="product-price">$897</div>
                        <div className="product-rating">Number of Stars  15 reviews </div>
                    </li>
                    <li className="product">
                        <img className="product-image" src="images/sports.png" alt="product" />
                        <div className="product-name">
                            <a href="product.html">Honda</a>
                        </div>
                        <div className="product-brand">Honda</div>
                        <div className="product-price">$797</div>
                        <div className="product-rating">Number of Stars  11 reviews </div>
                    </li>
                    <li className="product">
                        <img className="product-image" src="images/sports2.png" alt="product" />
                        <div className="product-name">
                            <a href="product.html">Sports Bike</a>
                        </div>
                        <div className="product-brand">Honda</div>
                        <div className="product-price">$777</div>
                        <div className="product-rating">Number of Stars  9 reviews </div>
                    </li>
                </ul>
            </div>
        </main>
        <footer className="footer">
            Best Vehicle Shop | Strawby-Design &copy; | All Rights Reserved
        </footer>
    </div>
  );
}

export default App;
