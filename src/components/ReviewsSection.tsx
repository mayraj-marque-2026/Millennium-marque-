import React, { useState } from 'react';
import { Star, MessageSquare, CheckCircle, PlusCircle, Quote, Sparkles, ThumbsUp } from 'lucide-react';
import { sampleReviews, businessInfo } from '../data/businessData';
import { ReviewItem } from '../types';

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewItem[]>(sampleReviews);
  const [showForm, setShowForm] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newComment.trim()) return;

    const newRev: ReviewItem = {
      id: `custom-rev-${Date.now()}`,
      author: newAuthor,
      comment: newComment,
      rating: newRating,
      date: "Just now",
      verified: true
    };

    setReviews([newRev, ...reviews]);
    setNewAuthor('');
    setNewComment('');
    setShowForm(false);
    setSubmittedMessage(true);

    setTimeout(() => setSubmittedMessage(false), 5000);
  };

  return (
    <section id="reviews" className="py-24 bg-[#0A0A0B] text-gray-200 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/[0.03] border border-white/10 text-[#C5A059] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Star className="w-3.5 h-3.5 text-[#C5A059] fill-[#C5A059]" />
            <span>Verified Guest Reviews</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white mb-4">
            What Our Guests Say
          </h2>
          <div className="w-16 h-[1px] bg-[#C5A059] mx-auto mb-6" />
        </div>

        {/* Big Rating Banner */}
        <div className="max-w-4xl mx-auto bg-[#121214] p-8 border border-white/10 shadow-2xl mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6 text-center sm:text-left">
            <div className="w-24 h-24 bg-[#0A0A0B] border border-white/10 flex flex-col items-center justify-center shrink-0">
              <span className="font-serif text-3xl font-normal text-[#C5A059]">4.1</span>
              <div className="flex text-[#C5A059] mt-1">
                <Star className="w-3 h-3 fill-[#C5A059]" />
                <Star className="w-3 h-3 fill-[#C5A059]" />
                <Star className="w-3 h-3 fill-[#C5A059]" />
                <Star className="w-3 h-3 fill-[#C5A059]" />
                <Star className="w-3 h-3 fill-[#C5A059]/40" />
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-normal text-white mb-1">
                Highly Rated Wedding Hall
              </h3>
              <p className="text-gray-300 text-sm font-light">
                Based on <strong className="text-[#C5A059] font-medium">{businessInfo.reviewCount} Verified Customer Reviews</strong> on Google
              </p>
              <div className="flex flex-wrap gap-2 mt-3 text-[10px] uppercase tracking-wider text-gray-400">
                <span className="bg-white/5 px-2.5 py-1 border border-white/10">Huge Car Parking Space</span>
                <span className="bg-white/5 px-2.5 py-1 border border-white/10">Spacious Venue</span>
                <span className="bg-white/5 px-2.5 py-1 border border-white/10">Pleasant Environment</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowForm(!showForm)}
            className="px-6 py-3.5 bg-[#C5A059] hover:bg-[#D4B573] text-[#0A0A0B] font-bold text-xs uppercase tracking-[0.2em] transition-colors shadow-lg flex items-center gap-2 shrink-0"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Write a Review</span>
          </button>
        </div>

        {/* Success Alert */}
        {submittedMessage && (
          <div className="max-w-2xl mx-auto mb-8 p-4 bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-lg animate-fadeIn">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Thank you for sharing your experience at Millennium Wedding Hall!</span>
          </div>
        )}

        {/* Write Review Modal/Form */}
        {showForm && (
          <form onSubmit={handleAddReview} className="max-w-2xl mx-auto mb-12 p-8 bg-[#121214] border border-white/10 shadow-2xl animate-fadeIn space-y-4">
            <h4 className="font-serif text-xl font-normal text-white">Share Your Experience</h4>
            
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-400 mb-1">Your Name</label>
              <input
                type="text"
                required
                value={newAuthor}
                onChange={(e) => setNewAuthor(e.target.value)}
                placeholder="e.g. Asad Ullah"
                className="w-full px-4 py-3 bg-[#0A0A0B] border border-white/10 text-white text-sm focus:outline-none focus:border-[#C5A059]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-400 mb-1">Rating</label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setNewRating(star)}
                    className="p-1 focus:outline-none"
                  >
                    <Star className={`w-5 h-5 ${star <= newRating ? 'text-[#C5A059] fill-[#C5A059]' : 'text-gray-600'}`} />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-400 mb-1">Your Feedback</label>
              <textarea
                required
                rows={3}
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write about the hall arrangements, parking, catering or stage decor..."
                className="w-full px-4 py-3 bg-[#0A0A0B] border border-white/10 text-white text-sm focus:outline-none focus:border-[#C5A059]"
              />
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-5 py-2.5 bg-white/5 text-gray-300 text-xs font-semibold uppercase tracking-wider hover:bg-white/10 border border-white/10"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#C5A059] hover:bg-[#D4B573] text-[#0A0A0B] text-xs font-bold uppercase tracking-widest shadow-md"
              >
                Submit Review
              </button>
            </div>
          </form>
        )}

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#121214] p-8 border border-white/5 flex flex-col justify-between relative group hover:border-[#C5A059]/30 transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-white/5 pointer-events-none group-hover:text-[#C5A059]/10 transition-colors" />

              <div>
                {/* Stars */}
                <div className="flex items-center text-[#C5A059] mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C5A059]" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-300 text-sm leading-relaxed italic mb-8 font-light">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-normal text-white text-sm">
                    {rev.author}
                  </h4>
                  <span className="text-[10px] uppercase tracking-widest text-gray-500">{rev.date}</span>
                </div>

                <div className="flex items-center gap-1 text-[10px] uppercase tracking-widest text-[#C5A059] bg-white/[0.03] px-2.5 py-1 border border-white/10">
                  <CheckCircle className="w-3 h-3 text-[#C5A059]" />
                  <span>Verified</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
