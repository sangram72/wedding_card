
"use client";

import { forwardRef, useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarDays,
  Heart,
  MapPin,
  Sparkles,
} from "lucide-react";

type PageProps = {
  children: React.ReactNode;
  className?: string;
};

const BookPage = forwardRef<HTMLDivElement, PageProps>(
  function BookPage({ children, className = "" }, ref) {
    return (
      <div ref={ref} className={`book-page ${className}`}>
        <div className="page-paper">
          <div className="page-border">{children}</div>
        </div>
      </div>
    );
  }
);

export default function WeddingBook() {
  const [guideVisible, setGuideVisible] = useState(true);
  const [viewport, setViewport] = useState({
    width: 1024,
    height: 768,
  });

  useEffect(() => {
    const updateViewport = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateViewport();

    window.addEventListener("resize", updateViewport);
    window.addEventListener("orientationchange", updateViewport);

    return () => {
      window.removeEventListener("resize", updateViewport);
      window.removeEventListener("orientationchange", updateViewport);
    };
  }, []);

 
  const isSmallScreen = viewport.width <= 600;

  const horizontalPadding = isSmallScreen ? 24 : 40;
  const verticalReservedSpace = isSmallScreen ? 270 : 280;

  const availableWidth = Math.max(
    240,
    viewport.width - horizontalPadding
  );

  const availableHeight = Math.max(
    320,
    viewport.height - verticalReservedSpace
  );

  const pageWidth = Math.round(
    Math.min(
      isSmallScreen ? 440 : 440,
      availableWidth,
      availableHeight / 1.42
    )
  );

  const pageHeight = Math.round(
    Math.min(
      pageWidth * 1.42,
      availableHeight,
      620
    )
  );
 const dismissGuide = () => setGuideVisible(false);

  return (
    <main className="wedding-world">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="book-heading">
        <span className="heading-ornament">✧</span>
        <p>AN INVITATION TO CELEBRATE LOVE</p>
        <span className="heading-ornament">✧</span>
      </header>

      <section
        className="book-stage"
        aria-label="Interactive wedding invitation book"
      >
        <div className="book-glow" />

      <HTMLFlipBook
  key={`${pageWidth}-${pageHeight}`}
  width={pageWidth}
  height={pageHeight}
  size="stretch"
  minWidth={260}
  maxWidth={440}
  minHeight={360}
  maxHeight={620}
  startZIndex={0}
  maxShadowOpacity={0.65}
  showCover={true}
  mobileScrollSupport={false}
  usePortrait={true}
  drawShadow={true}
  flippingTime={950}
  startPage={0}
  autoSize={true}
  clickEventForward={true}
  useMouseEvents={true}
  swipeDistance={25}
  showPageCorners={true}
  disableFlipByClick={false}
  className="wedding-book"
  style={{ margin: "0 auto" }}
>
  

          {/* PAGE 1 — FRONT COVER */}
          <BookPage className="cover-page">
            <div className="cover-ornament cover-ornament-top">
              ❧ ❋ ❧
            </div>

            <div className="cover-center">
              <span className="cover-small">
                A CELEBRATION OF LOVE
              </span>

              <div className="cover-emblem">
                <Heart size={42} strokeWidth={1} />
                <span>✧</span>
              </div>

              <h1 className="cover-title">Wedding</h1>
              <h2 className="cover-subtitle">Invitation</h2>

              <div className="gold-rule">
                <span>✦</span>
              </div>

              <p className="cover-names">Sangram &amp; Tiasha</p>
              <p className="cover-date">09 · 03 · 2027</p>

              <span className="cover-open">
                <BookOpen size={15} />
                PLEASE OPEN
              </span>
            </div>

            <div className="cover-ornament cover-ornament-bottom">
              ❧ ❋ ❧
            </div>
          </BookPage>

          {/* PAGE 2 — INTRODUCTION */}
          <BookPage className="intro-page">
            <p className="page-kicker">WITH LOVE AND BLESSINGS</p>

            <div className="alpana">❋</div>

            <h2 className="script-heading">
              A beautiful beginning
            </h2>

            <p className="body-copy">
              Some stories are written in the stars, and some
              begin with two hearts finding their way to each
              other.
            </p>

            <div className="heart-divider">
              <span />
              <Heart size={19} />
              <span />
            </div>

            <p className="body-copy">
              With the blessings of our families, we invite
              you to join us as we begin a lifetime of love,
              laughter and togetherness.
            </p>

            <div className="page-flower">✿</div>

            <p className="page-signature">
              With joy in our hearts
            </p>
          </BookPage>

          {/* PAGE 3 — THE COUPLE */}
          <BookPage className="couple-page">
            <p className="page-kicker">
              TWO HEARTS · ONE JOURNEY
            </p>

            <div className="couple-emblem">
              <span>❧</span>
              <Heart size={34} strokeWidth={1.1} />
              <span>❧</span>
            </div>

            <p className="couple-label">The Groom</p>
            <h2 className="inside-name">Sangram Nandi</h2>

            <div className="gold-rule">
              <span>✦</span>
            </div>

            <p className="couple-label">The Bride</p>
            <h2 className="inside-name">Tiasha Roy</h2>

            <div className="heart-divider">
              <span />
              <Sparkles size={18} />
              <span />
            </div>

            <p className="body-copy">
              Together, we turn a new page and begin our
              forever.
            </p>

            <p className="page-signature">
              Together, always ♡
            </p>
          </BookPage>

          {/* PAGE 4 — WEDDING CEREMONY */}
          <BookPage className="event-page">
            <div className="event-emblem">
              <span>❋</span>
            </div>

            <p className="page-kicker">THE SACRED UNION</p>

            <h2 className="event-title">Wedding</h2>
            <h3 className="event-script">Ceremony</h3>

            <div className="event-date-box">
              <span>MARCH</span>
              <strong>09</strong>
              <span>2027</span>
            </div>

            <div className="event-detail-book">
              {/* <MapPin size={19} /> */}

              <div>
                <strong>NKDA Community Hall</strong>
                <span>Biswa Bangla, New Town</span>
                <span>2nd &amp; 3rd Floors</span>
              </div>
            </div>

            <a
              className="venue-button"
              href="https://maps.app.goo.gl/iNuAGL5u6vavREDm7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin size={14} />
              VIEW LOCATION
            </a>

            <p className="event-note">
              Your presence is our blessing.
            </p>
          </BookPage>

          {/* PAGE 5 — RECEPTION */}
          <BookPage className="event-page reception-page">
            <div className="event-emblem">
              <span>✧</span>
            </div>

            <p className="page-kicker">AN EVENING OF JOY</p>

            <h2 className="event-title">Reception</h2>
            <h3 className="event-script">Celebration</h3>

            <div className="event-date-box">
              <span>MARCH</span>
              <strong>11</strong>
              <span>2027</span>
            </div>

            <div className="event-detail-book">
              {/* <MapPin size={19} /> */}

              <div>
                <strong>Tulsi Palace</strong>
                <span>56, Durganagar</span>
                <span>Near Dhalai Karkhana Bus Stand</span>
                <span>Delhi Road</span>
              </div>
            </div>

            <a
              className="venue-button"
              href="https://maps.app.goo.gl/28oVdW1Q3GBBKKFQ9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin size={14} />
              VIEW LOCATION
            </a>

            <p className="event-note">
              Let us celebrate together.
            </p>
          </BookPage>

          {/* PAGE 6 — OUR MESSAGE */}
          <BookPage className="message-page">
            <div className="alpana">✿</div>

            <p className="page-kicker">
              THE MOST BEAUTIFUL CHAPTER
            </p>

            <h2 className="script-heading">
              Our forever starts here
            </h2>

            <div className="heart-divider">
              <span />
              <Heart size={21} />
              <span />
            </div>

            <p className="body-copy">
              Two families, two hearts, one beautiful
              celebration.
            </p>

            <p className="body-copy">
              May our days be filled with kindness, our home
              with laughter, and our journey with endless love.
            </p>

            <div className="page-flower">❋</div>

            <p className="page-signature">March 2027</p>
          </BookPage>

          {/* PAGE 7 — THANK YOU */}
          <BookPage className="thankyou-page">
            <p className="page-kicker">
              FROM OUR HEARTS TO YOURS
            </p>

            <div className="thankyou-heart">
              <Heart size={48} strokeWidth={1} />
            </div>

            <h2 className="script-heading">
              With love &amp; gratitude
            </h2>

            <p className="body-copy">
              Thank you for being part of our story. Your
              blessings and good wishes will make our special
              days unforgettable.
            </p>

            <div className="gold-rule">
              <span>✦</span>
            </div>

            <p className="final-couple">
              Sangram &amp; Tiasha
            </p>

            <p className="page-signature">
              Forever begins with you.
            </p>
          </BookPage>

          {/* PAGE 8 — BACK COVER */}
          <BookPage className="back-cover">
            <div className="cover-ornament cover-ornament-top">
              ❧ ❋ ❧
            </div>

            <div className="back-center">
              <Heart size={39} strokeWidth={1} />

              <p className="back-title">A lifetime</p>
              <p className="back-title">of love</p>

              <div className="gold-rule">
                <span>✦</span>
              </div>

       

              <p className="back-thanks">
                Thank you for turning our pages.
              </p>
            </div>

            <div className="cover-ornament cover-ornament-bottom">
              ❧ ❋ ❧
            </div>
          </BookPage>
        </HTMLFlipBook>

        {guideVisible && (
          <div className="flip-guide">
            <div className="guide-icon">
              <BookOpen size={23} />
            </div>

            <div className="guide-text">
              <strong>
                Turn the page to discover our story
              </strong>

              <span>
                Swipe left or right, or tap a page corner.
              </span>
            </div>

            <div className="guide-arrows" aria-hidden="true">
              <ArrowLeft size={17} />
              <ArrowRight size={17} />
            </div>

            <button
              className="guide-dismiss"
              onClick={dismissGuide}
              aria-label="Dismiss page flipping guide"
            >
              Got it
            </button>
          </div>
        )}
      </section>

      <footer className="book-footer">
        <CalendarDays size={15} />
        <span>9 MARCH · WEDDING</span>
        <span className="footer-separator">✧</span>
        <span>11 MARCH · RECEPTION</span>
      </footer>

      <p className="bottom-hint">
        <ArrowLeft size={13} />
        <span>TURN THE PAGE</span>
        <ArrowRight size={13} />
      </p>
    </main>
  );
}
