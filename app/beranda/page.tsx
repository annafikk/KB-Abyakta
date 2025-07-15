import { getPosts } from "@/lib/api/posts";
import { getCategories } from "@/lib/api/categories";

import HeroSection from "@/components/beranda/HeroSection";
import FeaturedPost from "@/components/beranda/FeaturedPost";
import KategoriSection from "@/components/beranda/KategoriSection";
import LatestPostsSection from "@/components/beranda/LatestPostsSection";

export default async function Beranda() {
    const posts = await getPosts();
    const categories = await getCategories();

    const [featuredPost, ...latestPosts] = posts.slice(0, 7);

    return (
        <section className="space-y-16 pt-12 pb-20">
            <HeroSection />

            {featuredPost && <FeaturedPost post={featuredPost} />}

            <KategoriSection categories={categories} />

            <LatestPostsSection posts={latestPosts.slice(0, 6)} />
        </section>
    );
}
