
import { useEffect, useState } from "react";
import "./App.css";

function SentinelCamera() {
  return (
    <div className="camera-scene">
      <div className="camera">
        <div className="camera-top">
          <span className="camera-led" />
          <span className="camera-led-glow" />
        </div>
        <div className="camera-body">
          <div className="camera-lens">
            <div className="lens-inner">
              <div className="lens-reflection" />
              <div className="lens-smile" />
            </div>
          </div>
          <div className="camera-side" />
        </div>
        <div className="camera-mount" />
      </div>
    </div>
  );
}

function LoginPage({ onLogin }) {
  const [loginMethod, setLoginMethod] = useState("email");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="login-page">
      <div className="login-card">
        <section className="login-brand">
          <div className="brand-symbol">
            <svg viewBox="0 0 64 64" fill="none">
              <path
                d="M32 5L55 14V29C55 44 45 54 32 60C19 54 9 44 9 29V14L32 5Z"
                stroke="currentColor" strokeWidth="2.5"
              />
              <path
                d="M21 32L28 39L44 23"
                stroke="currentColor" strokeWidth="3"
                strokeLinecap="round" strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="brand-copy">
            <p className="brand-eyebrow">INTELLIGENT CAMPUS SECURITY</p>
            <h1>CAMPUSGUARD AI</h1>
          </div>
          <div className="brand-message">
            <span className="brand-line" />
            <h2>Security begins<br />with awareness.</h2>
            <p>Intelligent monitoring. Real-time awareness. A safer campus.</p>
          </div>
          <div className="brand-footer">
            <span className="status-dot" />
            CAMPUSGUARD AI SYSTEM
            <span className="footer-divider">/</span>
            SECURE ACCESS
          </div>
        </section>

        <section className="login-form-section">
          <div className="login-form-wrap">
            <div className="mobile-brand">
              <span className="status-dot" /> CAMPUSGUARD AI
            </div>
            <div className="form-heading">
              <span className="form-kicker">SECURE PORTAL</span>
              <h2>Welcome back.</h2>
              <p>Sign in to access your security workspace.</p>
            </div>

            <div className="login-tabs">
              <button
                type="button"
                className={loginMethod === "email" ? "login-tab active" : "login-tab"}
                onClick={() => setLoginMethod("email")}
              >
                Email
              </button>
              <button
                type="button"
                className={loginMethod === "phone" ? "login-tab active" : "login-tab"}
                onClick={() => setLoginMethod("phone")}
              >
                Phone Number
              </button>
            </div>

            <form onSubmit={(event) => {
              event.preventDefault();
              onLogin();
            }}>
              {loginMethod === "email" ? (
                <>
                  <label htmlFor="email">EMAIL ADDRESS</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="name@college.edu"
                    required
                  />
                  <div className="password-label">
                    <label htmlFor="password">PASSWORD</label>
                    <button
                      type="button"
                      className="text-button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? "HIDE" : "SHOW"}
                    </button>
                  </div>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    required
                  />
                  <div className="form-options">
                    <label className="remember-option">
                      <input type="checkbox" />
                      <span>Remember me</span>
                    </label>
                    <button
                      type="button"
                      className="text-button forgot-button"
                      onClick={() => alert("Password recovery will be added later.")}
                    >
                      Forgot password?
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <label htmlFor="phone">MOBILE NUMBER</label>
                  <div className="phone-input-wrap">
                    <span className="country-code">+91</span>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="Enter mobile number"
                      maxLength={10}
                      pattern="[0-9]{10}"
                      inputMode="numeric"
                      required
                    />
                  </div>
                  <label htmlFor="otp" className="otp-label">
                    ONE-TIME PASSWORD (OTP)
                  </label>
                  <input
                    id="otp"
                    type="text"
                    placeholder="Enter 6-digit OTP"
                    maxLength={6}
                    pattern="[0-9]{6}"
                    inputMode="numeric"
                    required
                  />
                  <p className="otp-request">
                    Demo mode: OTP verification is not active yet.
                  </p>
                </>
              )}

              <button className="sign-in-button" type="submit">
                <span>{loginMethod === "email" ? "Sign in to Campus" : "Verify & Sign in"}</span>
                <span className="button-arrow">→</span>
              </button>
            </form>

            <div className="login-bottom">
              <span className="bottom-lock">◆</span>
              Protected security workspace
            </div>
          </div>
        </section>
      </div>
      <footer className="page-footer">
        CAMPUSGUARD AI <span>©</span> 2026
        <span className="footer-right">INTELLIGENT CAMPUS SECURITY SYSTEM</span>
      </footer>
    </main>
  );
}

const sampleCameras = [
  { name: "Main Entrance", location: "North Gate", status: "Online", code: "CAM-01" },
  { name: "Library Block", location: "Academic Zone", status: "Online", code: "CAM-02" },
  { name: "Parking Area", location: "East Campus", status: "Offline", code: "CAM-03" },
  { name: "Science Building", location: "Restricted Zone", status: "Online", code: "CAM-04" },
];

const sampleAlerts = [
  { title: "Restricted-zone entry detected", place: "Science Building", time: "10:42 AM", severity: "High" },
  { title: "Motion detected near boundary", place: "North Gate", time: "10:18 AM", severity: "Medium" },
  { title: "Camera connection interrupted", place: "Parking Area", time: "09:56 AM", severity: "Low" },
];

function Dashboard({ onLogout }) {
  const [activePage, setActivePage] = useState("Overview");
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = [
    { name: "Overview", icon: "◫" },
    { name: "Live Monitoring", icon: "▣" },
    { name: "Security Alerts", icon: "⚑" },
    { name: "Restricted Zones", icon: "⬡" },
    { name: "Camera Management", icon: "◉" },
    { name: "User Management", icon: "♙" },
    { name: "Settings", icon: "⚙" },
  ];

  const stats = [
    { label: "Total Cameras", value: "08", note: "Registered cameras", icon: "◉", color: "teal" },
    { label: "Active Cameras", value: "06", note: "Currently online", icon: "▣", color: "green" },
    { label: "Today's Alerts", value: "12", note: "Across campus", icon: "⚑", color: "orange" },
    { label: "Restricted Zones", value: "03", note: "Under monitoring", icon: "⬡", color: "purple" },
  ];

  return (
    <div className="dashboard-layout">
      <aside className={`dashboard-sidebar ${menuOpen ? "sidebar-open" : ""}`}>
        <div className="dashboard-logo">
          <div className="dashboard-logo-icon">C</div>
          <div>
            <strong>CAMPUSGUARD</strong>
            <span>AI SECURITY SYSTEM</span>
          </div>
        </div>

        <div className="sidebar-section-label">WORKSPACE</div>
        <nav className="dashboard-nav">
          {navigation.map((item) => (
            <button
              key={item.name}
              className={activePage === item.name ? "nav-item active" : "nav-item"}
              onClick={() => {
                setActivePage(item.name);
                setMenuOpen(false);
              }}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.name}
              {item.name === "Security Alerts" && <span className="nav-count">3</span>}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="system-status">
            <span className="status-dot" />
            <div>
              <strong>System operational</strong>
              <small>Demo environment</small>
            </div>
          </div>
          <button className="logout-button" onClick={onLogout}>
            <span>↪</span> Sign out
          </button>
        </div>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-topbar">
          <button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
          <div className="breadcrumb">Workspace <span>/</span> {activePage}</div>
          <div className="topbar-actions">
            <span className="demo-label">DEMO MODE</span>
            <button className="notification-button" onClick={() => setActivePage("Security Alerts")}>
              ♧ <span />
            </button>
            <div className="user-profile">
              <div className="user-avatar">A</div>
              <div className="user-details">
                <strong>Administrator</strong>
                <small>System Admin</small>
              </div>
            </div>
          </div>
        </header>

        <div className="dashboard-content">
          <div className="dashboard-welcome">
            <div>
              <p className="dashboard-eyebrow">CAMPUS SECURITY CONTROL CENTER</p>
              <h1>{activePage === "Overview" ? "Security Overview" : activePage}</h1>
              <p>Monitor your campus, manage cameras and review security events.</p>
            </div>
            <div className="dashboard-date">
              <span>● SYSTEM ONLINE</span>
              <small>Live status · Sample data</small>
            </div>
          </div>

          {activePage === "Overview" && (
            <>
              <section className="stats-grid">
                {stats.map((stat) => (
                  <div className="stat-card" key={stat.label}>
                    <div className={`stat-icon ${stat.color}`}>{stat.icon}</div>
                    <div className="stat-label">{stat.label}</div>
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-note">{stat.note}</div>
                  </div>
                ))}
              </section>

              <section className="dashboard-section">
                <div className="section-heading">
                  <div>
                    <h2>Camera Monitoring</h2>
                    <p>Current status of registered campus cameras</p>
                  </div>
                  <button className="outline-action" onClick={() => setActivePage("Live Monitoring")}>
                    View all cameras →
                  </button>
                </div>
                <div className="camera-grid">
                  {sampleCameras.slice(0, 4).map((camera) => (
                    <div className="monitor-card" key={camera.code}>
                      <div className="monitor-preview">
                        <span className="preview-camera-icon">◉</span>
                        <span className="preview-label">CAMERA FEED</span>
                        <span className="preview-code">{camera.code}</span>
                        {camera.status === "Online" ? (
                          <span className="preview-status online">● LIVE</span>
                        ) : (
                          <span className="preview-status offline">● OFFLINE</span>
                        )}
                      </div>
                      <div className="monitor-info">
                        <div>
                          <strong>{camera.name}</strong>
                          <small>{camera.location}</small>
                        </div>
                        <span className={`camera-status ${camera.status.toLowerCase()}`}>
                          {camera.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <AlertsSection alerts={sampleAlerts} onViewAll={() => setActivePage("Security Alerts")} />
            </>
          )}

          {activePage === "Live Monitoring" && (
            <section className="dashboard-section">
              <div className="section-heading">
                <div>
                  <h2>Registered Cameras</h2>
                  <p>Camera feed placeholders for frontend development</p>
                </div>
              </div>
              <div className="camera-grid">
                {sampleCameras.map((camera) => (
                  <div className="monitor-card" key={camera.code}>
                    <div className="monitor-preview large">
                      <span className="preview-camera-icon">◉</span>
                      <span className="preview-label">{camera.code}</span>
                      <span className={`preview-status ${camera.status === "Online" ? "online" : "offline"}`}>
                        ● {camera.status.toUpperCase()}
                      </span>
                      <span className="feed-placeholder">Camera feed will appear here</span>
                    </div>
                    <div className="monitor-info">
                      <div><strong>{camera.name}</strong><small>{camera.location}</small></div>
                      <span className={`camera-status ${camera.status.toLowerCase()}`}>{camera.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {activePage === "Security Alerts" && (
            <AlertsSection alerts={sampleAlerts} />
          )}

          {activePage !== "Overview" &&
            activePage !== "Live Monitoring" &&
            activePage !== "Security Alerts" && (
              <div className="coming-soon-card">
                <div className="coming-soon-icon">⬡</div>
                <h2>{activePage}</h2>
                <p>This frontend section is planned for the next development stage.</p>
                <span>UNDER DEVELOPMENT</span>
              </div>
            )}
        </div>
      </main>
    </div>
  );
}

function AlertsSection({ alerts, onViewAll }) {
  return (
    <section className="dashboard-section alerts-section">
      <div className="section-heading">
        <div>
          <h2>Recent Security Alerts</h2>
          <p>Latest events reported by the monitoring system</p>
        </div>
        {onViewAll && (
          <button className="outline-action" onClick={onViewAll}>
            View all alerts →
          </button>
        )}
      </div>
      <div className="alerts-table-wrap">
        <table className="alerts-table">
          <thead>
            <tr>
              <th>EVENT</th>
              <th>LOCATION</th>
              <th>TIME</th>
              <th>SEVERITY</th>
            </tr>
          </thead>
          <tbody>
            {alerts.map((alert, index) => (
              <tr key={index}>
                <td><strong>{alert.title}</strong></td>
                <td>{alert.place}</td>
                <td>{alert.time}</td>
                <td><span className={`severity ${alert.severity.toLowerCase()}`}>{alert.severity}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="sample-disclaimer">Illustrative sample alerts. No live detection is connected.</p>
    </section>
  );
}

function App() {
  const [screen, setScreen] = useState("intro");

  useEffect(() => {
    const timer = window.setTimeout(() => setScreen("login"), 4200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {screen === "intro" && (
        <section className="intro-screen" aria-label="CAMPUSGUARD AI introduction">
          <SentinelCamera />
          <p className="intro-name">CAMPUSGUARD AI</p>
          <p className="intro-caption">INTELLIGENT CAMPUS SECURITY</p>
        </section>
      )}

      {screen === "login" && (
        <LoginPage onLogin={() => setScreen("dashboard")} />
      )}

      {screen === "dashboard" && (
        <Dashboard onLogout={() => setScreen("login")} />
      )}
    </div>
  );
}

export default App;
