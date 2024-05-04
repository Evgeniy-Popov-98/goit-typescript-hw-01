type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type NewType = Pick<AllType, "name" | "position" | "color" | "weight">;

function compare(top: NewType, bottom: NewType): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
