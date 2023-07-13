import { Component, Input } from '@angular/core';
import { Rating } from '@app/core/models/rating';

@Component({
  selector: 'app-rating-card',
  templateUrl: './rating-card.component.html',
  styleUrls: ['./rating-card.component.css']
})
export class RatingCardComponent {
  @Input() rating: Rating = {
    id: 1,
    professor: '石橋貴明',
    course: 'ゲーム理論',
    quality: 4.0,
    difficulty: 3.0,
    attendance: 'ほぼ毎回とる',
    textbook: 'あり',
    midterm: 'テスト',
    final: 'テスト + レポート',
    openNotes: '可',
    comment: 'コンビだがボケとツッコミの役割は特に分かれていないスタイルで、ネタ作りは石橋が担当している。デビュー当時のプロフィールには「カリスマ芸人」と記載していた。',
    likes: 2,
    dislikes: 0,
    date: new Date()
  } as Rating;

  // Inject the RatingService
  constructor() { }

  // Add like and dislike methods
}
