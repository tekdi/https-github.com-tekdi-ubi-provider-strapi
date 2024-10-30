import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::benefit.benefit",
  ({ strapi }) => ({
    async find(ctx) {
      const benefits = await super.find(ctx); // Directly get the array of benefits

      // Populate the createdBy field
      const benefitsWithCreatedBy = await Promise.all(
        benefits.data.map(async (benefit) => {
          return await strapi.entityService.findOne(
            "api::benefit.benefit",
            benefit.id,
            {
              populate: {
                createdBy: {
                  fields: ["id", "firstname"],
                },
                eligibility: {
                  populate: {
                    annual_income: true,
                    field_of_study: true,
                    caste: true,
                    class: true,
                  },
                },
                financial_information: {
                  populate: {
                    amt_per_beneficiary: true,
                  },
                },
                sponsors: true,
              },
            }
          );
        })
      );

      return benefitsWithCreatedBy;
    },

    async findOne(ctx) {
      const { id } = ctx.params;
      const benefit = await strapi.entityService.findOne(
        "api::benefit.benefit",
        id,
        {
          populate: { createdBy: true },
        }
      );

      return benefit;
    },
  })
);
