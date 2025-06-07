// components/ArticleSection.tsx
'use client'

export default function ArticleSection() {
  const articles = [
    {
      img: '/assets/img/blog/article-01.jpg',
      date: { day: '15', month: 'May' },
      category: 'Treatments',
      title: 'Understanding and Preventing Glaucoma: A Detailed Guide',
      excerpt: 'Glaucoma is a leading cause of blind worldwide, yet many....',
      href: '/blog-details'
    },
    {
      img: '/assets/img/blog/article-02.jpg',
      date: { day: '18', month: 'May' },
      category: 'Neurology',
      title: 'Discover the intersection of technology and neurology, transforming....',
      excerpt: 'Discover the intersection of technology and neurology, transforming....',
      href: '/blog-details'
    },
    {
      img: '/assets/img/blog/article-03.jpg',
      date: { day: '21', month: 'Apr' },
      category: 'Dental',
      title: '5 Essential Tips for Maintaining Optimal Oral Health',
      excerpt: 'Learn the top five daily practices to keep your teeth....',
      href: '/blog-details'
    },
    {
      img: '/assets/img/blog/article-04.jpg',
      date: { day: '22', month: 'Jan' },
      category: 'Care & Treatment',
      title: 'Beating Strong: The Digital Revol in Cardiac Care',
      excerpt: 'Discover how digital advancements are transforming cardiac care...',
      href: '/blog-details'
    }
  ]

  return (
    <section className="article-section">
      <div className="container">
        <div
          className="section-header sec-header-one text-center aos"
          data-aos="fade-up"
        >
          <span className="badge badge-primary">Recent Blogs</span>
          <h2>Stay Updated With Our Latest Articles</h2>
        </div>
        <div className="row g-4">
          {articles.map((a, i) => (
            <div key={i} className="col-lg-6">
              <div className="article-item aos" data-aos="fade-up">
                <div className="article-img">
                  <a href={a.href}>
                    <img src={a.img} className="img-fluid" alt={a.title} />
                  </a>
                  <div className="date-icon">
                    <span>{a.date.day}</span>
                    {a.date.month}
                  </div>
                </div>
                <div className="article-info">
                  <span className="badge badge-cyan mb-2">
                    {a.category}
                  </span>
                  <h6 className="mb-2">
                    <a href={a.href}>{a.title}</a>
                  </h6>
                  <p>{a.excerpt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center load-item aos" data-aos="fade-up">
          <a href="/blog-grid.html" className="btn btn-dark">
            View All Articles
            <i className="isax isax-arrow-right-3 ms-2" />
          </a>
        </div>
      </div>
    </section>
  )
}
