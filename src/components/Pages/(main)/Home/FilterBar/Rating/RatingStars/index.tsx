import Icon from '@/components/UI/Icon';
import colors from '@/global/colors';

type RatingStarsProps = {
  rating: number;
  selected?: boolean;
  onPress?: () => void;
};

const RatingStars = ({
  rating,
  selected = false,
  onPress,
}: RatingStarsProps) => {
  return (
    <div className="flex cursor-pointer hover:opacity-60" onClick={onPress}>
      {[1, 2, 3, 4, 5].map(star => {
        const isFilled = star <= rating;
        return (
          <Icon
            key={star}
            color={
              selected ? colors.secondary[40] : colors.alert.warning.primary
            }
            fill={
              isFilled
                ? selected
                  ? colors.secondary[40]
                  : colors.alert.warning.primary
                : 'transparent'
            }
            name="StarIcon"
            size={24}
          />
        );
      })}
    </div>
  );
};

export default RatingStars;
