"use client";

import {
  CheckCheck,
  FileText,
  Image as ImageIcon,
  Info,
  Mic,
  Phone,
  Search,
  Send,
  Video,
} from "lucide-react";
import Image from "next/image";

export default function Messages() {
  const contacts = [
    {
      id: 1,
      name: "CreativeAgency",
      avatar: "CA",
      role: "Agency",
      lastMessage: "Can you send the portfolio by 5 PM?",
      time: "Now",
      unread: 1,
      online: true,
      isAgency: true,
      color: "bg-green-600",
    },
    {
      id: 2,
      name: "GuitarMaster",
      avatar: "GM",
      image: "https://images.unsplash.com/photo-1549213783-8284d0336c4f?w=100",
      lastMessage: "That new riff is fire! 🔥",
      time: "2h ago",
      unread: 2,
      online: false,
    },
    {
      id: 3,
      name: "Sarah_S",
      avatar: "SS",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100",
      lastMessage: "Thanks for the gift! 🙌",
      time: "Yesterday",
      unread: 0,
      online: true,
    },
    {
      id: 4,
      name: "James L.",
      avatar: "JL",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
      lastMessage: "Let's discuss the project scope.",
      time: "Oct 24",
      unread: 0,
      online: false,
    },
    {
      id: 5,
      name: "Davide R.",
      avatar: "DR",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
      lastMessage: "Sent a photo.",
      time: "Oct 20",
      unread: 0,
      online: false,
    },
  ];

  return (
    <div className="flex h-[calc(100vh-(--spacing(20)))] m-4 bg-surface-dark/50 rounded-2xl border border-border-dark/30 overflow-hidden backdrop-blur-sm">
      {/* Left Sidebar: Chat List */}
      <div className="w-80 border-r border-border-dark/30 flex flex-col bg-surface-dark/50">
        <div className="p-4 border-b border-border-dark/30">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold text-white">Messages</h1>
            <button className="text-primary hover:text-white transition-colors">
              <div className="bg-surface-dark p-2 rounded-lg">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
              </div>
            </button>
          </div>

          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search messages..."
              className="w-full bg-background-dark border border-border-dark/30 rounded-lg h-10 pl-9 pr-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-primary"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2">
            {["All", "Unread", "Hiring", "Archived"].map((filter, i) => (
              <button
                key={filter}
                className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                  i === 0
                    ? "bg-primary text-white"
                    : "bg-surface-dark text-gray-400 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className={`p-4 flex gap-3 hover:bg-surface-dark cursor-pointer transition-colors ${
                contact.id === 1
                  ? "bg-surface-dark/50 border-l-2 border-primary"
                  : ""
              }`}
            >
              <div className="relative">
                <div
                  className={`w-12 h-12 rounded-full overflow-hidden flex items-center justify-center ${
                    contact.image ? "" : contact.color || "bg-gray-700"
                  }`}
                >
                  {contact.image ? (
                    <Image
                      src={contact.image}
                      alt={contact.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <span className="text-white font-bold">
                      {contact.avatar}
                    </span>
                  )}
                </div>
                {contact.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-surface-dark rounded-full" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-white font-semibold truncate text-sm">
                    {contact.name}
                  </h3>
                  <span
                    className={`text-xs ${
                      contact.id === 1 ? "text-primary" : "text-gray-500"
                    }`}
                  >
                    {contact.time}
                  </span>
                </div>
                <p
                  className={`text-sm truncate ${
                    contact.unread > 0
                      ? "text-white font-medium"
                      : "text-gray-400"
                  }`}
                >
                  {contact.lastMessage}
                </p>
              </div>
              {contact.unread > 0 && (
                <div className="flex flex-col justify-center">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold">
                      {contact.unread}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Pane: Chat Window */}
      <div className="flex-1 flex flex-col bg-background-dark/50 relative">
        {/* Detail Header */}
        <div className="h-16 border-b border-border-dark/30 flex items-center justify-between px-6 bg-surface-dark/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-xs">CA</span>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <h2 className="text-white font-bold">CreativeAgency</h2>
                <svg
                  className="w-4 h-4 text-blue-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-gray-400 text-xs text-green-500">
                  Online for Hiring
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 text-gray-400">
            <button className="hover:text-white transition-colors">
              <Phone className="h-5 w-5" />
            </button>
            <button className="hover:text-white transition-colors">
              <Video className="h-5 w-5" />
            </button>
            <button className="hover:text-white transition-colors">
              <Info className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Message Bubble: Received */}
          <div className="flex justify-start">
            <div className="bg-surface-dark rounded-2xl rounded-tl-none p-4 max-w-[70%] border border-border-dark/30">
              <p className="text-white text-sm">
                Hi CreativeAgency! I saw your post regarding the Senior Graphic
                Designer position. Is it still open?
              </p>
              <div className="flex items-center justify-end gap-1 mt-1">
                <span className="text-gray-500 text-[10px]">Yesterday</span>
                <CheckCheck className="h-3 w-3 text-gray-500" />
              </div>
            </div>
          </div>

          {/* Date Divider */}
          <div className="flex justify-center my-4">
            <span className="text-gray-500 text-xs bg-surface-dark px-3 py-1 rounded-full border border-border-dark/30">
              Today, Oct 28
            </span>
          </div>

          {/* Message Bubble: Sent with Attachment */}
          <div className="flex justify-end">
            <div className="bg-surface-dark rounded-2xl rounded-tr-none p-4 max-w-[70%] border border-border-dark/30">
              <div className="bg-background-dark rounded-xl p-3 mb-3 flex items-center gap-3 border border-border-dark/30 hover:bg-[#332840] cursor-pointer transition-colors group">
                <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center shrink-0">
                  <FileText className="h-5 w-5 text-red-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium truncate">
                    Job_Requirements.pdf
                  </p>
                  <p className="text-gray-500 text-xs">2.4 MB</p>
                </div>
                <div className="p-2 text-gray-400 group-hover:text-white">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-white text-sm">
                Here are the detailed requirements for the Senior Designer role.
              </p>
              <div className="flex items-center justify-start gap-1 mt-1">
                <span className="text-gray-500 text-[10px]">10:30 AM</span>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center shrink-0 ml-3 self-end">
              <span className="text-white text-xs font-bold">CA</span>
            </div>
          </div>

          {/* Message Bubble: Sent Text */}
          <div className="flex justify-end">
            <div className="bg-primary rounded-2xl rounded-tr-none p-4 max-w-[70%] shadow-lg shadow-primary/20">
              <p className="text-white text-sm">
                Sure! I'm just polishing the last few slides. It will be ready
                in an hour.
              </p>
              <div className="flex items-center justify-end gap-1 mt-1">
                <span className="text-white/70 text-[10px]">10:40 AM</span>
                <CheckCheck className="h-3 w-3 text-white/70" />
              </div>
            </div>
          </div>

          {/* Message Bubble: Received Text */}
          <div className="flex justify-start">
            <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center shrink-0 mr-3 self-end">
              <span className="text-white text-xs font-bold">CA</span>
            </div>
            <div className="bg-surface-dark rounded-2xl rounded-tl-none p-4 max-w-[70%] border border-border-dark/30">
              <p className="text-white text-sm">
                Can you send the portfolio by 5 PM? We're finalizing the
                candidates today.
              </p>
              <div className="flex items-center justify-start gap-1 mt-1">
                <span className="text-gray-500 text-[10px]">10:42 AM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 bg-surface-dark/50 border-t border-border-dark/30">
          <div className="relative flex items-center gap-3">
            <button className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
              <PlusIcon />
            </button>
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Type a message..."
                className="w-full bg-background-dark border border-border-dark/30 rounded-full h-12 pl-12 pr-12 text-sm text-white focus:outline-none focus:border-primary transition-colors"
              />
              <button className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
                <div className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center">
                  <div className="w-3 h-3 text-xs leading-none">☺</div>
                </div>
              </button>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <button className="text-gray-400 hover:text-white">
                  <Mic className="h-5 w-5" />
                </button>
                <button className="text-gray-400 hover:text-white">
                  <ImageIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
            <button className="p-3 bg-primary hover:bg-primary/90 rounded-full text-white shadow-lg transition-transform hover:scale-105 active:scale-95">
              <Send className="h-5 w-5 ml-0.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlusIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" fill="#2a2330" stroke="#4a3c53" />
      <path d="M12 8V16" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 12H16" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
