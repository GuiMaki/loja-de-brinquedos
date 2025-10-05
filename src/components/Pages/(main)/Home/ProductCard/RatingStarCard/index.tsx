import Icon from '@/components/UI/Icon';
import colors from '@/global/colors';

type RatingStarsCardProps = {
  rating: number;
};

const RatingStarsCard = ({ rating }: RatingStarsCardProps) => {
  const color = colors.alert.warning.primary;

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map(star => (
        <Icon
          key={star}
          color={color}
          fill={star <= rating ? color : 'transparent'}
          name="StarIcon"
          size={24}
        />
      ))}
    </div>
  );
};

export default RatingStarsCard;
