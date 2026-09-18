import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import {
  ArrowUpRight,
  Bell,
  ChevronDown,
  ChevronRight,
  Clock3,
  Command,
  Eye,
  LayoutGrid,
  LogOut,
  Menu,
  MoreHorizontal,
  Plus,
  Search,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  Star,
  TrendingUp,
  WalletCards,
  X,
} from "lucide-react";
import { Button } from "./components/ui/button";

const watchlist = [
  {
    ticker: "NVDA",
    name: "NVIDIA Corporation",
    price: "$141.82",
    change: "+3.84%",
    positive: true,
  },
  {
    ticker: "AAPL",
    name: "Apple Inc.",
    price: "$228.07",
    change: "+0.62%",
    positive: true,
  },
  {
    ticker: "TSLA",
    name: "Tesla, Inc.",
    price: "$338.74",
    change: "-1.15%",
    positive: false,
  },
  {
    ticker: "MSFT",
    name: "Microsoft Corp.",
    price: "$415.56",
    change: "+1.04%",
    positive: true,
  },
  {
    ticker: "AMZN",
    name: "Amazon.com, Inc.",
    price: "$227.03",
    change: "+2.31%",
    positive: true,
  },
];

const positions = [
  {
    ticker: "NVDA",
    shares: "24 shares",
    value: "$3,403.68",
    return: "+$126.48",
  },
  {
    ticker: "AAPL",
    shares: "10 shares",
    value: "$2,280.70",
    return: "+$14.20",
  },
  { ticker: "VOO", shares: "8 shares", value: "$4,188.80", return: "+$32.64" },
];

function Sparkline({ positive = true }: { positive?: boolean }) {
  return (
    <svg className="sparkline" viewBox="0 0 88 30" aria-hidden="true">
      <polyline
        className={positive ? "sparkline-positive" : "sparkline-negative"}
        points={
          positive
            ? "1,25 12,21 20,23 30,13 39,17 50,8 60,12 70,5 87,9"
            : "1,7 12,12 20,8 30,16 39,12 50,22 60,17 70,25 87,20"
        }
      />
    </svg>
  );
}

function App() {
  const {
    isLoading, // Loading state, the SDK needs to reach Auth0 on load
    isAuthenticated,
    error,
    loginWithRedirect: login, // Starts the login flow
    logout: auth0Logout, // Starts the logout flow
    user, // User profile
  } = useAuth0();

  const signup = () =>
    login({ authorizationParams: { screen_hint: "signup" } });

  const logout = () =>
    auth0Logout({ logoutParams: { returnTo: window.location.origin } });

  if (isLoading)
    return <div className="auth-loading">Loading your workspace...</div>;

  if (!isAuthenticated) {
    return (
      <main className="auth-shell">
        <div className="auth-art">
          <span className="eyebrow">Wall Street Monday / INVEST</span>
          <h1>
            Put your money
            <br />
            <em>in motion.</em>
          </h1>
          <p>A clearer way to build, track, and understand your portfolio.</p>
          <div className="auth-market">
            <span>MARKET OPEN</span>
            <strong>+1.24%</strong>
            <small>S&amp;P 500 today</small>
          </div>
        </div>
        <section className="auth-panel">
          <div className="brand-mark">
            <span>NS</span>
            <strong>northstar</strong>
          </div>
          <div className="auth-copy">
            <span className="eyebrow">YOUR FINANCIAL HQ</span>
            <h2>Welcome back.</h2>
            <p>Sign in to see what your money is doing today.</p>
          </div>
          {error && <div className="error-message">{error.message}</div>}
          <Button className="auth-button" onClick={() => login()}>
            Log in to Northstar <ChevronRight />
          </Button>
          <Button className="auth-signup" variant="outline" onClick={signup}>
            Create an account
          </Button>
          <p className="auth-legal">
            By continuing, you agree to our Terms and Privacy Policy.
          </p>
        </section>
      </main>
    );
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-mark">
          <span>NS</span>
          <strong>Wall Street Monday</strong>
        </div>
        <nav className="main-nav">
          <p className="nav-label">Workspace</p>
          <a className="nav-item active">
            <LayoutGrid /> Overview
          </a>
          <a className="nav-item">
            <Eye /> Watchlist <span className="nav-count">5</span>
          </a>
          <a className="nav-item">
            <WalletCards /> Portfolio
          </a>
          <a className="nav-item">
            <Clock3 /> Activity
          </a>
          <p className="nav-label nav-spaced">Tools</p>
          <a className="nav-item">
            <TrendingUp /> Markets
          </a>
          <a className="nav-item">
            <SlidersHorizontal /> Screeners
          </a>
        </nav>
        <div className="sidebar-bottom">
          <div className="cash-card">
            <span>Available to invest</span>
            <strong>$4,280.45</strong>
            <a>
              Move money <ChevronRight />
            </a>
          </div>
          <a className="nav-item">
            <Settings2 /> Settings
          </a>
          <button className="nav-item logout-button" onClick={logout}>
            <LogOut /> Sign out
          </button>
          <div className="profile">
            <div className="avatar">
              {user?.email?.slice(0, 2).toUpperCase() || "KM"}
            </div>
            <div>
              <strong>{user?.name || "Kelly Morgan"}</strong>
              <span>Individual account</span>
            </div>
            <MoreHorizontal />
          </div>
        </div>
      </aside>
      <main className="main-content">
        <header className="topbar">
          <div className="mobile-brand">
            <div className="brand-mark">
              <span>NS</span>
              <strong>northstar</strong>
            </div>
          </div>
          <button className="search-bar">
            <Search />
            <span>Search markets, stocks, ETFs...</span>
            <kbd>
              <Command /> K
            </kbd>
          </button>
          <div className="top-actions">
            <button className="icon-button">
              <Bell />
              <i />
            </button>
            <button className="market-status">
              <span /> Market open
            </button>
            <button className="mobile-menu">
              <Menu />
            </button>
          </div>
        </header>
        <div className="page-wrap">
          <div className="page-heading">
            <div>
              <p className="eyebrow">Tuesday, November 19, 2024</p>
              <h1>
                Good morning, Kelly <span>✦</span>
              </h1>
              <p className="subheading">Here&apos;s your financial pulse.</p>
            </div>
            <Button className="deposit-button">
              <Plus /> Add funds
            </Button>
          </div>
          <section className="summary-grid">
            <div className="balance-card">
              <div className="card-topline">
                <span>Total portfolio value</span>
                <button className="tiny-icon">
                  <MoreHorizontal />
                </button>
              </div>
              <div className="balance">$18,436.72</div>
              <div className="balance-change">
                <ArrowUpRight /> $286.14 <span>+1.58% today</span>
              </div>
              <div className="balance-chart">
                <div className="chart-labels">
                  <span>Portfolio performance</span>
                  <span>
                    1D <b>1W</b> 1M 1Y ALL
                  </span>
                </div>
                <svg
                  viewBox="0 0 600 116"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0" stopColor="#d4f25f" stopOpacity=".32" />
                      <stop offset="1" stopColor="#d4f25f" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    className="chart-area"
                    d="M0 95 C35 91, 43 70, 76 77 S122 98, 151 72 S201 56, 224 68 S270 45, 300 52 S343 74, 366 45 S411 20, 439 34 S473 60, 500 33 S554 43, 600 8 V116 H0 Z"
                  />
                  <path
                    className="chart-line"
                    d="M0 95 C35 91, 43 70, 76 77 S122 98, 151 72 S201 56, 224 68 S270 45, 300 52 S343 74, 366 45 S411 20, 439 34 S473 60, 500 33 S554 43, 600 8"
                  />
                </svg>
              </div>
            </div>
            <div className="metric-card">
              <span>Today&apos;s return</span>
              <strong className="positive-text">+$286.14</strong>
              <small>+1.58%</small>
              <div className="metric-rule" />
              <span>All-time return</span>
              <strong className="positive-text">+$2,840.22</strong>
              <small>+18.22%</small>
            </div>
            <div className="allocation-card">
              <div className="card-topline">
                <span>Portfolio allocation</span>
                <button className="tiny-icon">
                  <MoreHorizontal />
                </button>
              </div>
              <div className="donut-wrap">
                <div className="donut">
                  <div>
                    <strong>5</strong>
                    <span>assets</span>
                  </div>
                </div>
                <div className="legend">
                  <span>
                    <i className="legend-stock" /> Stocks <b>61%</b>
                  </span>
                  <span>
                    <i className="legend-etf" /> ETFs <b>32%</b>
                  </span>
                  <span>
                    <i className="legend-cash" /> Cash <b>7%</b>
                  </span>
                </div>
              </div>
            </div>
          </section>
          <div className="content-grid">
            <section className="panel positions-panel">
              <div className="panel-heading">
                <div>
                  <p className="eyebrow">Your investments</p>
                  <h2>Portfolio</h2>
                </div>
                <Button variant="outline" size="sm">
                  View all <ChevronRight />
                </Button>
              </div>
              <div className="position-list">
                {positions.map((position) => (
                  <div className="position-row" key={position.ticker}>
                    <div className="ticker-icon">
                      {position.ticker.slice(0, 1)}
                    </div>
                    <div className="position-name">
                      <strong>{position.ticker}</strong>
                      <span>{position.shares}</span>
                    </div>
                    <Sparkline />
                    <div className="position-value">
                      <strong>{position.value}</strong>
                      <span className="positive-text">{position.return}</span>
                    </div>
                    <button className="row-menu">
                      <MoreHorizontal />
                    </button>
                  </div>
                ))}
              </div>
              <div className="cash-row">
                <div className="ticker-icon cash-icon">$</div>
                <div className="position-name">
                  <strong>Cash</strong>
                  <span>Available to invest</span>
                </div>
                <div className="position-value">
                  <strong>$4,280.45</strong>
                  <span>22.4% of portfolio</span>
                </div>
              </div>
            </section>
            <section className="panel watchlist-panel">
              <div className="panel-heading">
                <div>
                  <p className="eyebrow">Keep an eye on</p>
                  <h2>Watchlist</h2>
                </div>
                <button className="plus-icon">
                  <Plus />
                </button>
              </div>
              <div className="watchlist">
                {watchlist.map((item) => (
                  <div className="watch-row" key={item.ticker}>
                    <Star className="star-icon" />
                    <div className="watch-name">
                      <strong>{item.ticker}</strong>
                      <span>{item.name}</span>
                    </div>
                    <Sparkline positive={item.positive} />
                    <div className="watch-price">
                      <strong>{item.price}</strong>
                      <span
                        className={
                          item.positive ? "positive-text" : "negative-text"
                        }
                      >
                        {item.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section className="panel order-panel">
              <div className="panel-heading">
                <div>
                  <p className="eyebrow">Make a move</p>
                  <h2>Trade</h2>
                </div>
                <button className="asset-selector">
                  NVDA <ChevronDown />
                </button>
              </div>
              <div className="trade-tabs">
                <button className="trade-tab active">Buy</button>
                <button className="trade-tab">Sell</button>
              </div>
              <div className="order-field">
                <label>Order type</label>
                <button>
                  Market order <ChevronDown />
                </button>
              </div>
              <div className="order-field">
                <label>Amount</label>
                <div className="amount-input">
                  <span>$</span>
                  <input defaultValue="500.00" aria-label="Amount" />
                </div>
              </div>
              <div className="order-estimate">
                <span>Estimated shares</span>
                <strong>3.52 shares</strong>
              </div>
              <Button className="review-button">
                Review order <ChevronRight />
              </Button>
              <div className="secure-note">
                <ShieldCheck /> Fractional shares available
              </div>
            </section>
          </div>
          <section className="news-strip">
            <div className="news-title">
              <span className="eyebrow">Market brief</span>
              <strong>What&apos;s moving</strong>
            </div>
            <div className="news-item">
              <span className="news-tag">EARNINGS</span>
              <p>NVIDIA reports record revenue, stock jumps in pre-market</p>
              <ChevronRight />
            </div>
            <div className="news-item">
              <span className="news-tag green">MARKETS</span>
              <p>Tech leads a broad rally as investors await Fed minutes</p>
              <ChevronRight />
            </div>
            <button className="news-close">
              <X />
            </button>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
