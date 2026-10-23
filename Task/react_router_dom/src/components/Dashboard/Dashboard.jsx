import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const initialProjects = [
  {
    id: 1,
    name: "Website Redesign",
    category: "Design",
    status: "In Progress",
    progress: 75,
    color: "bg-indigo-600",
    dueDate: "Oct 28, 2026",
  },
  {
    id: 2,
    name: "Mobile Application",
    category: "Development",
    status: "In Progress",
    progress: 45,
    color: "bg-violet-600",
    dueDate: "Nov 05, 2026",
  },
  {
    id: 3,
    name: "Marketing Campaign",
    category: "Marketing",
    status: "Completed",
    progress: 100,
    color: "bg-emerald-600",
    dueDate: "Oct 15, 2026",
  },
  {
    id: 4,
    name: "Analytics Dashboard",
    category: "Development",
    status: "Pending",
    progress: 10,
    color: "bg-amber-500",
    dueDate: "Nov 12, 2026",
  },
];

const initialActivities = [
  {
    id: 1,
    title: "Website Redesign updated",
    detail: "Project progress changed to 75%",
    time: "2 hr ago",
  },
  {
    id: 2,
    title: "Marketing Campaign completed",
    detail: "Project marked as completed",
    time: "5 hr ago",
  },
];

const navigation = [
  { name: "Overview", icon: "▦" },
  { name: "Projects", icon: "▣" },
  { name: "Analytics", icon: "▥" },
  { name: "Messages", icon: "✉" },
  { name: "Profile", icon: "👤" },
  { name: "Other", icon:    "📋"},
  { name: "Settings", icon: "⚙" },
];

function Dashboard() {
  const navigate = useNavigate();

  const [activePage, setActivePage] = useState("Overview");
  const [projects, setProjects] = useState(initialProjects);
  const [activities, setActivities] = useState(initialActivities);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [newProjectName, setNewProjectName] = useState("");
  const [newProjectCategory, setNewProjectCategory] = useState("Development");
  const [formMessage, setFormMessage] = useState("");

  const completedCount = projects.filter(
    (project) => project.status === "Completed",
  ).length;

  const inProgressCount = projects.filter(
    (project) => project.status === "In Progress",
  ).length;

  const stats = [
    {
      title: "Total Projects",
      value: projects.length,
      change: "Across all categories",
      icon: "▣",
      iconStyle: "bg-indigo-100 text-indigo-700",
    },
    {
      title: "In Progress",
      value: inProgressCount,
      change: "Projects being worked on",
      icon: "◷",
      iconStyle: "bg-amber-100 text-amber-700",
    },
    {
      title: "Completed",
      value: completedCount,
      change: "Successfully completed",
      icon: "✓",
      iconStyle: "bg-emerald-100 text-emerald-700",
    },
    {
      title: "Completion Rate",
      value: projects.length
        ? `${Math.round((completedCount / projects.length) * 100)}%`
        : "0%",
      change: "Of all current projects",
      icon: "↗",
      iconStyle: "bg-violet-100 text-violet-700",
    },
  ];

  const handleLogout = () => {
    // Demo only: clear your auth session here when a backend is connected.
    setShowLogoutConfirm(false);
    navigate("/login");
  };

  const selectPage = (page) => {
    setActivePage(page);
    setSidebarOpen(false);
    setSearch("");
    setStatusFilter("All");
  };

  return (
    <div className=" min-h-screen bg-gray-50 text-gray-900">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-gray-950/50 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-gray-200 bg-white transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b border-gray-100 px-6 py-4">
          <button
            type="button"
            onClick={() => selectPage("Overview")}
            className="flex items-center gap-3"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-lg font-bold text-white">
              AM
            </span>
            <span className="text-2xl font-extrabold tracking-tight">
              Ankita
            </span>
          </button>

          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 lg:hidden"
          >
            ✕
          </button>
        </div>

        <div className="px-4 py-6">
          <nav className="space-y-1" aria-label="Dashboard navigation">
            {navigation.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={() => selectPage(item.name)}
                className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left font-medium transition ${
                  activePage === item.name
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-100"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <span className="w-6 text-center text-lg" aria-hidden="true">
                  {item.icon}
                </span>
                {item.name}
                {item.name === "Messages" && (
                  <span className="ml-auto rounded-full bg-indigo-100 px-2 py-0.5 text-xs text-indigo-700">
                    2
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-auto border-t border-gray-100 p-4">
          <button
            type="button" 
            onClick={() => setShowLogoutConfirm(true)}
            className="uppercase flex w-full items-center gap-3 rounded-xl px-4 py-3 font-bold text-red-600 transition hover:bg-red-50 hover:text-red-600 "
          >
            <span aria-hidden="true">⏻</span>
            Log Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="min-h-screen lg:ml-64">
        {/* Topbar */}
        <header className="sticky top-0 z-30 border-b border-gray-200 bg-white/95 backdrop-blur">
          <div className="flex h-20 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
            <div className="flex min-w-0 items-center gap-3">
              <button
                type="button"
                aria-label="Open navigation menu"
                onClick={() => setSidebarOpen(true)}
                className="rounded-lg border border-gray-200 p-2 hover:bg-gray-100 lg:hidden"
              >
                ☰
              </button>

              <div className="min-w-0">
                <h1 className="truncate text-xl font-bold sm:text-2xl">
                  {activePage}
                </h1>
                <p className="hidden text-sm text-gray-500 sm:block">
                  Welcome back! Here's your project details.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
              <button
                type="button"
                aria-label="Toggle notifications"
                aria-expanded={notificationsOpen}
                onClick={() => {
                  setNotificationsOpen(!notificationsOpen);
                  setProfileOpen(false);
                }}
                className="relative rounded-xl border border-gray-200 p-2.5 text-gray-600 hover:bg-gray-100"
              >
                🔔
                {activities.length > 0 && (
                  <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
                )}
              </button>
            </div>
          </div>

          {/* Notifications Dropdown */}
          {notificationsOpen && (
            <div className="absolute right-4 top-16 z-40 w-[min(24rem,calc(100vw-2rem))] rounded-2xl border border-gray-200 bg-white p-4 shadow-xl sm:right-24">
              <div className="flex items-center justify-between">
                <h2 className="font-bold">Recent Notifications</h2>
                <button
                  type="button"
                  onClick={() => setNotificationsOpen(false)}
                  className="text-gray-500 hover:text-gray-900"
                  aria-label="Close notifications"
                >
                  ✕
                </button>
              </div>
              <div className="mt-4 space-y-4">
                {activities.slice(0, 4).map((activity) => (
                  <div
                    key={activity.id}
                    className="border-b border-gray-100 pb-3 last:border-0"
                  >
                    <p className="text-sm font-semibold">{activity.title}</p>
                    <p className="mt-1 text-xs text-gray-500">
                      {activity.detail}
                    </p>
                    <p className="mt-1 text-xs text-indigo-600">
                      {activity.time}
                    </p>
                  </div>
                ))}
                {activities.length === 0 && (
                  <p className="text-sm text-gray-500">You're all caught up.</p>
                )}
              </div>
            </div>
          )}

          {/* Profile Dropdown */}
          {profileOpen && (
            <div className="absolute right-4 top-16 z-40 w-52 rounded-2xl border border-gray-200 bg-white p-2 shadow-xl">
              <button
                type="button"
                onClick={() => {
                  selectPage("Settings");
                  setProfileOpen(false);
                }}
                className="w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-gray-100"
              >
                Account Settings
              </button>
              <button
                type="button"
                onClick={() => {
                  setProfileOpen(false);
                  setShowLogoutConfirm(true);
                }}
                className="w-full rounded-lg px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50"
              >
                Log Out
              </button>
            </div>
          )}
        </header>

        <main className="p-4 sm:p-6 lg:p-8 min-h-[calc(100vh-225px)]">
          {/* Overview */}
          {activePage === "Overview" && (
            <>
              <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h2 className="text-xl font-bold">Dashboard Overview</h2>
                  <p className="mt-1 text-sm text-gray-500">
                    Track your projects and workspace activity.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setFormMessage("");
                    setShowProjectForm(true);
                  }}
                  className="rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white shadow-lg shadow-indigo-100 transition hover:bg-indigo-700"
                >
                  + New Project
                </button>
              </div>

              {/* Project Status Cards */}
              <section
                aria-label="Project statistics"
                className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
              >
                {stats.map((stat) => (
                  <article
                    key={stat.title}
                    className="rounded-2xl border border-gray-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-medium text-gray-500">
                        {stat.title}
                      </p>
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-xl text-xl font-bold ${stat.iconStyle}`}
                      >
                        {stat.icon}
                      </span>
                    </div>
                    <p className="mt-4 text-3xl font-extrabold">{stat.value}</p>
                    <p className="mt-2 text-xs text-gray-500">{stat.change}</p>
                  </article>
                ))}
              </section>  
            </>
          )}


          {/* Projects Page*/}
          {activePage === "Projects" && (
          <section className="min-h-[calc(100vh-225px)] flex items-center justify-center text-2xl font-bold">
            We are coming soon...
          </section>
          )}

          {/* Analytics Page */}
          {activePage === "Analytics" && (
            <section className="min-h-[calc(100vh-225px)]  flex items-center justify-center text-2xl font-bold">
            We are coming soon...
          </section>
          )}

          {/* Messages Page */}
          {activePage === "Messages" && (
            <>
            <section className="rounded-2xl border border-gray-200 bg-white p-6">
              <h2 className="text-xl font-bold">Messages</h2>
              <p className="mt-2 text-gray-500">
                Your messaging inbox will appear here when connected to a
                messaging service.
              </p>
              <button
                type="button"
                onClick={() => navigate("/dashboard")}
                className="mt-5 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700"
              >
                Contact Support
              </button>
            </section>
            </>
          )}

          {/* Profile Page */}
          {activePage === "Profile" && (
            <section className="min-h-[calc(100vh-225px)]  flex items-center justify-center text-2xl font-bold">
            We are coming soon...
          </section>
          )}

           {/* Other Page */}
          {activePage === "Other" && (
            <section className="min-h-[calc(100vh-225px)]  flex items-center justify-center text-2xl font-bold">
            We are coming soon...
          </section>
          )}

          {/* Settings Page */}
          {activePage === "Settings" && (
            <section className="rounded-2xl border border-gray-200 bg-white p-6">
              <h2 className="text-xl font-bold">Account Settings</h2>
              <p className="mt-2 text-gray-500">
                This is used for demo only.
              </p>
              <div className="mt-6 rounded-xl bg-gray-50 p-5">
                <p className="font-semibold">User</p>
                <p className="mt-1 text-sm text-gray-500">
                  Connect your authentication provider to load and update real
                  account details.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowLogoutConfirm(true)}
                className="mt-5 rounded-xl border border-red-200 px-5 py-3 font-bold text-red-600 hover:bg-red-50 uppercase"
              >
                <span aria-hidden="true">⏻ </span>
                 Log Out
              </button>
            </section>
          )}
        </main>
      </div>

      {/* New Project Modal */}
      {showProjectForm && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-gray-950/50 p-4"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              setShowProjectForm(false);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="new-project-title"
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between gap-3">
              <h2 id="new-project-title" className="text-xl font-bold">
                Create New Project
              </h2>
              <button
                type="button"
                onClick={() => setShowProjectForm(false)}
                aria-label="Close project form"
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
              >
                ✕
              </button>
            </div>

            <form className="mt-6 space-y-5">
              <div>
                <label
                  htmlFor="project-name"
                  className="mb-2 block text-sm font-semibold"
                >
                  Project Name
                </label>
                <input
                  id="project-name"
                  autoFocus
                  required
                  maxLength={100}
                  value={newProjectName}
                  onChange={(e) => {
                    setNewProjectName(e.target.value);
                    setFormMessage("");
                  }}
                  placeholder="Enter project name"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              <div>
                <label
                  htmlFor="project-category"
                  className="mb-2 block text-sm font-semibold"
                >
                  Category
                </label>
                <select
                  id="project-category"
                  value={newProjectCategory}
                  onChange={(e) => setNewProjectCategory(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-indigo-500"
                >
                  <option>Development</option>
                  <option>Design</option>
                  <option>Marketing</option>
                </select>
              </div>

              {formMessage && (
                <p role="alert" className="text-sm text-red-600">
                  {formMessage}
                </p>
              )}

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowProjectForm(false)}
                  className="rounded-xl border border-gray-300 px-4 py-3 font-medium hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700"
                >
                  Create Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Logout Confirmation */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 z-70 flex items-center justify-center bg-gray-950/50 p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="logout-title"
            className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-xl text-red-600">
              ⏻
            </div>
            <h2 id="logout-title" className="mt-4 text-xl font-bold">
              Log out?
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Are you sure you want to leave the dashboard?
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowLogoutConfirm(false)}
                className="rounded-xl border border-gray-300 px-4 py-2.5 font-medium hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-xl bg-red-600 px-4 py-2.5 font-semibold text-white hover:bg-red-700"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
