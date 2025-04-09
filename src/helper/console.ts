type Primitive = string | number | boolean | undefined;
type JsonLogParameter = Primitive | Array<Primitive> | Object;

export const jsonLog = (p: JsonLogParameter, s: number = 2) => {
  console.log(JSON.stringify(p, null, s));
}
