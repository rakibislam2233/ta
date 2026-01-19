"use client";

import { Button } from "@/components/ui/button";
import LinkExtension from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { motion } from "framer-motion";
import {
  AtSign,
  Bold,
  ChevronRight,
  Hash,
  Italic,
  List,
  ListOrdered,
  MapPin,
  Smile,
  X
} from "lucide-react";
import { Input } from "../../../../ui/input";

interface CreatePostFormProps {
  onClose: () => void;
  isHiring: boolean;
  setIsHiring: (val: boolean) => void;
  allowComments: boolean;
  setAllowComments: (val: boolean) => void;
  allowDownloads: boolean;
  setAllowDownloads: (val: boolean) => void;
  privacy: "public" | "connections" | "private";
  setPrivacy: (val: "public" | "connections" | "private") => void;
}

export default function CreatePostForm({
  onClose,
  allowComments,
  setAllowComments,
  allowDownloads,
  setAllowDownloads,
  privacy,
  setPrivacy,
}: CreatePostFormProps) {
  // Tiptap Editor Configuration
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder:
          "Write a caption... Use #hashtags and @mentions to reach more people!",
      }),
      LinkExtension.configure({
        openOnClick: false,
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "bg-transparent border-none text-foreground focus:outline-none min-h-[120px] text-base leading-relaxed",
      },
    },
    immediatelyRender: false,
  });

  return (
    <div className="w-full lg:w-[40%] bg-background flex flex-col flex-1 lg:h-full overflow-y-auto custom-scrollbar border-l border-border relative z-20">
      {/* Header */}
      <div className="p-4 border-b border-border flex items-center justify-between sticky top-0 bg-background backdrop-blur-md z-30">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="lg:hidden text-gray-400 hover:text-foreground transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          <h2 className="text-foreground font-bold text-lg">New Post</h2>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-4 md:gap-6 flex-1">
        {/* User Info & Privacy Selector */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-linear-to-br from-primary to-purple-400 p-0.5">
              <div className="w-full h-full rounded-full bg-background relative overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-gray-800 text-foreground font-bold text-xs md:text-sm">
                  AT
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-foreground font-bold text-sm md:text-base">
                Alex Talent
              </h4>
              <p className="text-gray-400 text-xs md:text-sm">Creator</p>
            </div>
          </div>
        </div>

        {/* Rich Text Caption Editor */}
        <div className="space-y-3">
          <div
            className="min-h-35 cursor-text"
            onClick={() => editor?.commands.focus()}
          >
            <EditorContent editor={editor} />
          </div>

          {/* Editor Toolbar */}
          <div className="flex items-center justify-between border-t border-border pt-3">
            <div className="flex gap-2">
              <ToolbarButton
                active={editor?.isActive("bold")}
                onClick={() => editor?.chain().focus().toggleBold().run()}
                icon={Bold}
              />
              <ToolbarButton
                active={editor?.isActive("italic")}
                onClick={() => editor?.chain().focus().toggleItalic().run()}
                icon={Italic}
              />
              <ToolbarButton
                active={editor?.isActive("bulletList")}
                onClick={() => editor?.chain().focus().toggleBulletList().run()}
                icon={List}
              />
              <ToolbarButton
                active={editor?.isActive("orderedList")}
                onClick={() =>
                  editor?.chain().focus().toggleOrderedList().run()
                }
                icon={ListOrdered}
              />
            </div>
            <div className="flex gap-2 border-l border-border pl-2">
              <ToolbarButton onClick={() => {}} icon={Smile} active={false} />
              <ToolbarButton onClick={() => {}} icon={AtSign} active={false} />
              <ToolbarButton onClick={() => {}} icon={Hash} active={false} />
            </div>
          </div>
        </div>

        {/* Location Input */}
        <div className="relative group">
          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
          <Input
            type="text"
            placeholder="Location"
            className="pl-10 md:pl-12"
          />
        </div>

        {/* Advanced Settings */}
        <div className="border-t border-border pt-4">
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer list-none text-foreground font-bold text-sm mb-4">
              <span>Advanced Settings</span>
              <ChevronRight className="h-4 w-4 text-gray-400 group-open:rotate-90 transition-transform" />
            </summary>

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              className="flex flex-col gap-4 pl-1"
            >
              {/* Instagram-style: Turn off commenting */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-foreground text-sm font-medium">
                    Allow sharing
                  </span>
                  <Switch
                    checked={allowDownloads}
                    onChange={() => setAllowDownloads(!allowDownloads)}
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Harum molestias ea earum illo quam. Porro assumenda est
                  voluptate accusamus quo.
                </p>
              </div>

              {/* Common on Instagram Reels: Allow Downloads */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-foreground text-sm font-medium">
                    Allow sharing
                  </span>
                  <Switch
                    checked={allowDownloads}
                    onChange={() => setAllowDownloads(!allowDownloads)}
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Harum molestias ea earum illo quam. Porro assumenda est
                  voluptate accusamus quo.
                </p>
              </div>
              {/* Common on both FB & IG: Allow others to share */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-foreground text-sm font-medium">
                    Allow sharing
                  </span>
                  <Switch
                    checked={allowDownloads}
                    onChange={() => setAllowDownloads(!allowDownloads)}
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Harum molestias ea earum illo quam. Porro assumenda est
                  voluptate accusamus quo.
                </p>
              </div>
            </motion.div>
          </details>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-4 border-t border-border bg-background sticky bottom-0 z-30 flex gap-6">
        <Button
          variant="outline"
          onClick={onClose}
          className="w-full cursor-pointer"
        >
          Cancel
        </Button>
        <Button className="w-full cursor-pointer">
          Share Post
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}

// Helper Components
function ToolbarButton({
  active,
  onClick,
  icon: Icon,
}: {
  active?: boolean;
  onClick: () => void;
  icon: React.ElementType;
}) {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded-lg transition-colors ${
        active
          ? "bg-white/10 text-primary"
          : "text-gray-400 hover:text-foreground"
      }`}
    >
      <Icon className="w-5 h-5" />
    </button>
  );
}

function Switch({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <button
      onClick={onChange}
      className={`w-11 h-5 rounded-full relative transition-colors duration-300 ease-in-out cursor-pointer ${
        checked ? "bg-primary" : "bg-gray-600"
      }`}
    >
      <div
        className={`size-4 bg-white rounded-full absolute top-0.5 transition-transform duration-300 shadow-md ${
          checked ? "left-[calc(100%-1.2rem)]" : "left-0.5"
        }`}
      />
    </button>
  );
}
