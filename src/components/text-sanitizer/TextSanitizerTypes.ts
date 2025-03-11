import { z } from "zod";

const ZBikeTerms = z.object({
  "N30": z.boolean(),
  "30/60/90": z.boolean(),
  "Spring": z.boolean(),
})

const ZComponentTerms = z.object({
  "N30": z.boolean(),
  "N60": z.boolean(),
  "N90": z.boolean(),
})

const ZTextSanitizerForm = z.object({
  text: z.string(),
  removeyear: z.boolean(),
  removesize: z.boolean(),
  checkfreight: z.boolean(),
  type: z.union([z.literal("bike"), z.literal("component")]),
  bikeTerms: ZBikeTerms,
  componentTerms: ZComponentTerms,
})

type TTextSanitizerForm = z.infer<typeof ZTextSanitizerForm>
type TBikeTerms = z.infer<typeof ZBikeTerms>
type TComponentTerms = z.infer<typeof ZComponentTerms>


export { ZTextSanitizerForm, type TTextSanitizerForm, type TBikeTerms, type TComponentTerms }