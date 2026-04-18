"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const sidebarItems = [
  { icon: "home", active: true, label: "Dashboard" },
  { icon: "groups", active: false, label: "Staff" },
  { icon: "badge", active: false, label: "Employee" },
  { icon: "person", active: false, label: "Claim" },
  { icon: "receipt_long", active: false, label: "Payroll" },
  { icon: "deployed_code", active: false, label: "Projects" },
  { icon: "schedule", active: false, label: "Timesheet" },
  { icon: "track_changes", active: false, label: "Performance" },
  { icon: "account_balance_wallet", active: false, label: "Finance" },
  { icon: "settings", active: false, label: "Settings" },
];

const stats = [
  { title: "TOTAL EMP", sub: "Workforce", val: "14", icon: "groups", color: "from-orange-500 to-orange-400", bg: "bg-orange-500" },
  { title: "PRESENT", sub: "Clocked In", val: "12", icon: "check_circle", color: "from-blue-500 to-blue-400", bg: "bg-blue-500" },
  { title: "ABSENT", sub: "Today", val: "2", icon: "event_busy", color: "from-emerald-500 to-emerald-400", bg: "bg-emerald-500" },
  { title: "TICKETS", sub: "Pending", val: "3", icon: "confirmation_number", color: "from-violet-500 to-violet-400", bg: "bg-violet-500" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.04,
      delayChildren: 0.1,
    }
  }
};

const sidebarContainerVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
      staggerChildren: 0.06,
      delayChildren: 0.2
    }
  }
};

// PREMIUM LOGO: dramatic spring spin with heavy bounce + glow burst
const logoVariants: Variants = {
  hidden: { opacity: 0, scale: 0, rotate: -120 },
  visible: { 
    opacity: 1, 
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 180, damping: 8, mass: 1.4 }
  }
};

const sidebarIconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5, y: 10 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 400, damping: 15 }
  }
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const statsContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
};

const statCardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const middleRowContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.4 }
  }
};

const bottomRowContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.6 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
  }
};

export default function HeroDashboard() {
  return (
    <>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <motion.div 
        className="relative bg-[#0a0a0a] rounded-2xl shadow-2xl border border-slate-800 overflow-hidden h-[400px] md:h-[500px] lg:h-[620px]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex h-full">
          {/* Sidebar */}
          <motion.div 
            className="w-14 md:w-20 bg-[#050505] flex flex-col items-center py-3 border-r border-slate-800 flex-shrink-0 overflow-hidden"
            variants={sidebarContainerVariants}
          >
            <motion.div className="mb-2 md:mb-4 relative flex items-center justify-center" variants={logoVariants}>
              {/* Glow burst effect on logo entrance */}
              <motion.div
                className="absolute w-12 h-12 rounded-full bg-indigo-500/40"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 0.7, 0], scale: [0, 1.8, 2.5] }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                style={{ filter: 'blur(10px)' }}
              />
              <Image 
                src="https://res.cloudinary.com/da00qz5zp/image/upload/v1776512015/LOGO_HR_ABHIYAN_PNG_01_04_2026_FULL_LOGO_6_WITH_PATCH_k9v1gf.png" 
                alt="HRMS Logo" 
                width={40} 
                height={40} 
                className="drop-shadow-lg rounded-lg object-contain w-12 h-12 md:w-14 md:h-14 relative z-10"
                priority
              />
            </motion.div>

            <div className="flex flex-col gap-1 md:gap-1.5 overflow-hidden no-scrollbar">
              {sidebarItems.map((item, i) => (
                <motion.div
                  key={i}
                  variants={sidebarIconVariants}
                  className={`w-7 h-7 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-xl flex items-center justify-center cursor-pointer transition-colors duration-200 ${
                    item.active 
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' 
                      : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                  }`}
                  title={item.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="material-symbols-outlined text-sm md:text-base lg:text-lg">{item.icon}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="flex-1 bg-[#f1f5f9] flex flex-col overflow-hidden min-w-0">
            {/* Header */}
            <motion.div 
              className="bg-white px-3 py-2 flex items-center justify-between border-b border-slate-200 shadow-sm"
              variants={headerVariants}
            >
              <div className="flex items-center gap-2">
                <h2 className="text-slate-800 font-bold text-sm md:text-base">Dashboard</h2>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 px-2 py-1 rounded-full border border-slate-200">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center text-white text-xs font-bold">
                  A
                </div>
                <span className="text-slate-600 text-xs font-medium hidden sm:block">Hi, Admin!</span>
              </div>
            </motion.div>

            {/* Dashboard Content - scrollable ONLY for widgets */}
            <div className="flex-1 p-2 md:p-4 space-y-2 md:space-y-3 overflow-y-auto no-scrollbar">
              {/* TOP STATS - with hover effect (previous version) */}
              <motion.div 
                className="grid grid-cols-2 lg:grid-cols-4 gap-2"
                variants={statsContainerVariants}
              >
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    variants={statCardVariants}
                    className={`relative overflow-hidden rounded-xl p-2 md:p-3 text-white cursor-pointer ${stat.bg}`}
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-90`} />
                    <div className="relative z-10">
                      <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-wider opacity-90 mb-0.5">{stat.title}</p>
                      <p className="text-[8px] md:text-[10px] opacity-75 mb-1">{stat.sub}</p>
                      <div className="flex items-center justify-between">
                        <p className="text-lg md:text-2xl font-bold">{stat.val}</p>
                        <span className="material-symbols-outlined text-lg md:text-2xl opacity-80">{stat.icon}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* MIDDLE ROW - with hover effect (previous version) */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-2"
                variants={middleRowContainerVariants}
              >
                <motion.div variants={cardVariants} className="bg-white rounded-xl p-3 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" whileHover={{ y: -2 }}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-orange-100 flex items-center justify-center">
                      <span className="material-symbols-outlined text-orange-600 text-sm">schedule</span>
                    </div>
                    <h3 className="font-bold text-slate-800 text-xs">Attendance Overview</h3>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                        <span className="text-slate-600">Present: <b className="text-blue-600">12</b></span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                        <span className="text-slate-600">Absent: <b className="text-orange-600">2</b></span>
                      </div>
                    </div>
                    <div className="relative w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
                      <svg viewBox="0 0 100 100" className="transform -rotate-90 w-full h-full">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#f1f5f9" strokeWidth="10" />
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#3B82F6" strokeWidth="10" strokeDasharray="200 251" strokeLinecap="round" />
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#F97316" strokeWidth="10" strokeDasharray="40 251" strokeDashoffset="-200" strokeLinecap="round" />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-xs md:text-sm font-bold text-slate-800">86%</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={cardVariants} className="bg-white rounded-xl p-3 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" whileHover={{ y: -2 }}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-amber-100 flex items-center justify-center">
                      <span className="material-symbols-outlined text-amber-600 text-sm">bolt</span>
                    </div>
                    <h3 className="font-bold text-slate-800 text-xs">Quick Actions</h3>
                  </div>
                  <div className="space-y-1.5">
                    <button className="w-full bg-gradient-to-r from-orange-500 to-orange-400 text-white py-1.5 rounded-lg text-[10px] font-bold flex items-center justify-center gap-1">
                      <span className="material-symbols-outlined text-xs">person_add</span> 
                      Add Employee
                    </button>
                    <button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-400 text-white py-1.5 rounded-lg text-[10px] font-bold">
                      Apply Leave
                    </button>
                  </div>
                </motion.div>

                <motion.div variants={cardVariants} className="bg-white rounded-xl p-3 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" whileHover={{ y: -2 }}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-amber-100 flex items-center justify-center">
                      <span className="material-symbols-outlined text-amber-600 text-sm">notifications</span>
                    </div>
                    <h3 className="font-bold text-slate-800 text-xs">Notifications</h3>
                    <span className="ml-auto bg-red-500 text-white text-[8px] px-1.5 py-0.5 rounded-full font-bold">3</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-start gap-2 p-1.5 bg-slate-50 rounded-lg">
                      <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-purple-600 text-xs">schedule</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[9px] font-medium text-slate-800 truncate">Welcome to HRMS!</p>
                        <p className="text-[8px] text-slate-500">Just now</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 p-1.5 bg-slate-50 rounded-lg">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-blue-600 text-xs">person</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[9px] font-medium text-slate-800 truncate">New employee joined</p>
                        <p className="text-[8px] text-slate-500">5m ago</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* BOTTOM ROW - with hover effect (previous version) */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-2"
                variants={bottomRowContainerVariants}
              >
                <motion.div variants={cardVariants} className="bg-white rounded-xl p-3 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" whileHover={{ y: -2 }}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-indigo-100 flex items-center justify-center">
                      <span className="material-symbols-outlined text-indigo-600 text-sm">task_alt</span>
                    </div>
                    <h3 className="font-bold text-slate-800 text-xs">Task Status</h3>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-600">Completed</span>
                      <span className="font-bold text-emerald-600">8</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-1.5">
                      <div className="bg-emerald-500 h-full rounded-full w-[66%]" />
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-600">In Progress</span>
                      <span className="font-bold text-blue-600">3</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-1.5">
                      <div className="bg-blue-500 h-full rounded-full w-[25%]" />
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={cardVariants} className="bg-white rounded-xl p-3 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" whileHover={{ y: -2 }}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center">
                      <span className="material-symbols-outlined text-emerald-600 text-sm">emoji_events</span>
                    </div>
                    <h3 className="font-bold text-slate-800 text-xs">Team Performance</h3>
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex-1">
                      <p className="text-lg md:text-xl font-bold text-slate-800">94%</p>
                      <p className="text-[9px] text-slate-500">Efficiency</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-lg md:text-xl font-bold text-slate-800">4.8</p>
                      <p className="text-[9px] text-slate-500">Avg Rating</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-1.5">
                      {['bg-blue-500', 'bg-purple-500', 'bg-emerald-500', 'bg-orange-500'].map((color, i) => (
                        <div 
                          key={i}
                          className={`w-6 h-6 rounded-full ${color} border-2 border-white flex items-center justify-center text-white text-[9px] font-bold`}
                        >
                          {String.fromCharCode(65 + i)}
                        </div>
                      ))}
                    </div>
                    <span className="text-[9px] text-slate-500">+8 more</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}