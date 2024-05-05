type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type NewTopType = Pick<AllType, "name" | "color">;
type NewBottomType = Pick<AllType, "position" | "weight">;

function compare(top: NewTopType, bottom: NewBottomType): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
