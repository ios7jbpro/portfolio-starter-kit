import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        About Me
      </h1>
      <p className="mb-4">
        {`
        Hey! I’m ios7 — a freelance Android dev who spends way too much time
        customizing apps, breaking systems (on purpose), and then fixing them just to see if I can.
        (boredom is such an amazing and a terrible thing at the same time!)
        I used to write Java code like it's second nature and tinker with Android like it's a
        job. Just recently, I stopped though - it doesn't hype with me anymore. My blog’s where
        I dump my experiments, rants about stupid state of the internet, tips, and random
        discoveries, from clean app design to weird system hacks. If it runs on Android; 
        I’ve probably poked at it. Twice. Maybe thrice.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
