import { z } from "zod";

const ZBikeTerms = z.optional(z.object({
  N30: z.boolean(),
  "30/60/90": z.boolean(),
  Spring: z.boolean(),
}))

const ZComponentTerms = z.optional(z.object({
  N30: z.boolean(),
  N60: z.boolean(),
  N90: z.boolean(),
}))

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

export { ZTextSanitizerForm, type TTextSanitizerForm }


// import { ZUserPreferences } from "./userPreferences";

// const ZRoleTypes = z.union([z.literal("user"), z.literal("manager"), z.literal("admin")]);

// const ZUserForm = z.object({
//   email: z.string().email(),
//   name: z.string(),
//   roles: ZRoleTypes.array(),
//   current_password: z.string().optional(),
//   password: z.string().optional(),
//   password_confirmation: z.string().optional(),
// })
// .superRefine(({ password, password_confirmation, current_password }, ctx) => {
//   // Edit user validations.
//   if (!password && !password_confirmation && current_password === "") {
//     if (current_password === "") {
//       return ctx.addIssue({
//         code: z.ZodIssueCode.custom,
//         path: ["current_password"],
//         message: 'Current password is required to update account.',
//       });
//     }
//   }