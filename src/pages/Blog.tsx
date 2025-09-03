import React, { useState, useEffect } from 'react';

// Math component using KaTeX (you'll need to add KaTeX CSS and JS to your HTML)
const MathInline: React.FC<{ children: string }> = ({ children }) => {
  const mathRef = React.useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    if (mathRef.current && (window as any).katex) {
      try {
        (window as any).katex.render(children, mathRef.current, {
          throwOnError: false,
          displayMode: false
        });
      } catch (error) {
        console.error('KaTeX error:', error);
        if (mathRef.current) {
          mathRef.current.textContent = children;
        }
      }
    }
  }, [children]);
  
  return <span ref={mathRef} className="math-inline">{children}</span>;
};

const MathBlock: React.FC<{ children: string }> = ({ children }) => {
  const mathRef = React.useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (mathRef.current && (window as any).katex) {
      try {
        (window as any).katex.render(children, mathRef.current, {
          throwOnError: false,
          displayMode: true
        });
      } catch (error) {
        console.error('KaTeX error:', error);
        if (mathRef.current) {
          mathRef.current.textContent = children;
        }
      }
    }
  }, [children]);
  
  return <div ref={mathRef} className="math-block">{children}</div>;
};

interface BlogEntry {
  id: string;
  date: string;
  title: string;
  content: React.ReactNode; // This allows JSX content
  tags?: string[];
  excerpt?: string; // Short description for previews
}

const Blog: React.FC = () => {
  const [selectedEntry, setSelectedEntry] = useState<BlogEntry | null>(null);
  const [blogEntries, setBlogEntries] = useState<BlogEntry[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Blog entries with rich JSX content including LaTeX math
  const staticEntries: BlogEntry[] = [
    {
      id: '1',
      date: '2025-08-23',
      title: 'Blog Start',
      excerpt: 'First blog entry, setting up personal thoughts and research directions.',
      tags: ['blog', 'start', 'personal'],
      content: (
        <div>
          <p>First blog entry, it's a personal blog, so it will talk about anything that I can think of. Which means that there might be some reflections about my family, how I can feel bad at times, etc. I need to put myself out there, express myself, and this is a part of it.</p>
          
          <blockquote>
            <p><strong>Note:</strong> For strangers on the internet, I'll make sections, differentiating boring personal stuff and interesting research.</p>
          </blockquote>

          <p>Said research will be on <em>autonomous agent content generation and moderation</em>. Big words I just made up (there's still some intentions behind).</p>

          <div className="blog-section">
            <h3>What to Expect</h3>
            <ul>
              <li>Personal reflections and thoughts</li>
              <li>Technical research and experiments</li>
              <li>Project updates and progress</li>
              <li>Random musings and discoveries</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: '2',
      date: '2025-08-28',
      title: 'Context Sensitive Grammars 3D',
      excerpt: 'Lesson on grammars, introduction to 3D CS grammar',
      tags: ['grammar', 'PCG'],
      content: (
        <div>
          <p> Today will be about what I am doing as a whole, as in lessons on what are grammars and context sensitive grammars</p>
          <div className="bloc-section">
            <h2> Grammars </h2>
            <p> <b>Grammars</b> are a 5-tuple of <MathInline>{'\\lt \\Sigma, V, S, R \\gt'}</MathInline></p>
            <ul>
              <li> <MathInline>{'\\Sigma'}</MathInline> is the alphabet, which is the set of terminal symbols used in generation </li>
              <li> <MathInline>{'V'}</MathInline> is the non-terminal symbol set </li>
              <li> <MathInline>{'S'}</MathInline> is the starting symbol list (there might be multiple times the same symbol)</li>
              <li> <MathInline>{'R'}</MathInline> is the set of rules that we will use in derivating a new set of symbol from a previous one</li>
            </ul>

            <div className="bloc-section">
              <h3> Example </h3>
              <p> Let the following grammar <MathInline>G</MathInline> be defined as </p>
            </div>

            <ul>
              <li> <MathInline>{'\\Sigma = \\{a, b\\}'}</MathInline> The 2 symbols that will not change throughout the transformations </li>
              <li> <MathInline>{'V = \\{A, B, X\\}'}</MathInline> The intermediary symbols we use to produce the words of a <b>Language</b> </li>
              <li> <MathInline>{'S = \\{ X\\}'}</MathInline> Our starting symbol</li>
              <li> <MathInline>{'R'}</MathInline> Defined as such
                <ul>
                  <li> <MathInline>{'X \\rightarrow AXB \| \\epsilon'}</MathInline></li>
                  <li> <MathInline>{'A \\rightarrow a'}</MathInline></li>
                  <li> <MathInline>{'B \\rightarrow b'}</MathInline></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: '3',
      date: '2025-08-29',
      title: 'React Component Architecture',
      excerpt: 'Deep dive into component design patterns and state management strategies.',
      tags: ['react', 'architecture', 'frontend'],
      content: (
        <div>
          <p>Today I spent some time refactoring the blog component architecture. Here's what I learned about building flexible, reusable components.</p>

          <div className="blog-section">
            <h3>Component Structure</h3>
            <p>The key is to separate concerns properly:</p>
            
            <div className="code-block">
              <pre><code>{`interface BlogEntry {
  id: string;
  date: string;
  title: string;
  content: React.ReactNode; // 🎯 This is the magic
  tags?: string[];
  excerpt?: string;
}`}</code></pre>
            </div>
          </div>

          <div className="blog-section">
            <h3>Why React.ReactNode?</h3>
            <p>Using <code>React.ReactNode</code> instead of plain strings allows for:</p>
            <ul>
              <li>Rich JSX content with formatting</li>
              <li>Embedded components and interactive elements</li>
              <li>Images, videos, and multimedia content</li>
              <li>Code blocks with syntax highlighting</li>
              <li>Custom styling and layouts</li>
              <li><strong>Mathematical expressions with LaTeX!</strong></li>
            </ul>
            
            <p>For example, we can now write complex equations like:</p>
            <MathBlock>{`\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}`}</MathBlock>
            <p>Or inline math like <MathInline>{`e^{i\\pi} + 1 = 0`}</MathInline> seamlessly in our content.</p>
          </div>

          <div className="blog-highlight">
            <h4>💡 Pro Tip</h4>
            <p>This approach gives you the flexibility of a CMS while keeping everything in code, making it perfect for developer blogs and portfolios with mathematical content.</p>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    setBlogEntries(staticEntries);
    setSelectedEntry(staticEntries[0]); // Show first entry by default
  }, []);

  const filteredEntries = blogEntries.filter(entry =>
    entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1>Devlog</h1>
        <p>Thoughts, experiments, and digital adventures</p>
      </div>

      <div className="blog-layout">
        {/* Sidebar with entry list */}
        <aside className="blog-sidebar">
          <div className="search-section">
            <input
              type="text"
              placeholder="Search entries..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="entries-list">
            <h3>All Entries</h3>
            {filteredEntries
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .map(entry => (
                <div
                  key={entry.id}
                  onClick={() => setSelectedEntry(entry)}
                  className={`entry-card ${selectedEntry?.id === entry.id ? 'active' : ''}`}
                >
                  <div className="entry-date">
                    {new Date(entry.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                  <h4 className="entry-card-title">{entry.title}</h4>
                  {entry.excerpt && (
                    <p className="entry-excerpt">{entry.excerpt}</p>
                  )}
                  {entry.tags && (
                    <div className="entry-tags">
                      {entry.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="tag-mini">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
          </div>

          <div className="blog-stats">
            <div className="stat">
              <span className="stat-number">{blogEntries.length}</span>
              <span className="stat-label">Entries</span>
            </div>
            <div className="stat">
              <span className="stat-number">
                {Array.from(new Set(blogEntries.flatMap(entry => entry.tags || []))).length}
              </span>
              <span className="stat-label">Tags</span>
            </div>
          </div>
        </aside>

        {/* Main content area */}
        <main className="blog-main">
          {selectedEntry ? (
            <BlogEntryView entry={selectedEntry} />
          ) : (
            <div className="no-selection">
              <p>Select an entry from the sidebar to read</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

// Component to display a blog entry
interface BlogEntryViewProps {
  entry: BlogEntry;
}

const BlogEntryView: React.FC<BlogEntryViewProps> = ({ entry }) => {
  return (
    <article className="blog-entry">
      <header className="entry-header">
        <div className="entry-meta">
          <time className="entry-date">
            {new Date(entry.date).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>
        <h1 className="entry-title">{entry.title}</h1>
        {entry.tags && (
          <div className="entry-tags-full">
            {entry.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        )}
      </header>

      <div className="entry-content">
        {entry.content}
      </div>
    </article>
  );
};

export default Blog;