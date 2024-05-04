type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type NewType = Pick<AllType, "name" | "position" | "color" | "weight">;

function compare(
  top: AllType,
  bottom: AllType
): NewType<Pick<AllType, "name" | "position" | "color" | "weight">> {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
