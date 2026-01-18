"use client";
import ExampleForm from "@/components/ExampleForm";
import PostCard from "@/components/FeedPost";
import { MOCK_POSTS } from "@/lib/data";

export default function PublicHome() {

  return (
    <section className="w-full max-w-2xl mx-auto px-4 py-8 flex flex-col gap-12 pb-32">
      <div className="space-y-8">
        {MOCK_POSTS.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
