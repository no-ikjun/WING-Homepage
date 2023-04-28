interface Mobile<T, S> {
  model: T;
  color: S;
}

const mobile: Mobile<string, number> = {
  model: "iPhone 12 Pro Max",
  color: 111111,
};
