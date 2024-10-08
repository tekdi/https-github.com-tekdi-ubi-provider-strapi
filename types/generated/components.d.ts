import type { Struct, Schema } from '@strapi/strapi';

export interface CompositeAttributesFinancialInformation
  extends Struct.ComponentSchema {
  collectionName: 'components_composite_attributes_financial_informations';
  info: {
    displayName: 'financial_information';
    description: '';
  };
  attributes: {
    parent_occupation: Schema.Attribute.Enumeration<
      [
        'Farmer (Krishisevak)',
        'Cleanliness worker (Safai Karamchari)',
        'Defence personel',
        'Manual Scavengers',
        'Tanners & Flayers',
        'Waste Pickers',
        'Hazardous Cleaning',
        'Not Applicable',
      ]
    >;
    amt_per_beneficiary: Schema.Attribute.JSON;
    max_bebeficiary: Schema.Attribute.Integer;
  };
}

export interface CompositeAttributesEligibility extends Struct.ComponentSchema {
  collectionName: 'components_composite_attributes_eligibilities';
  info: {
    displayName: 'eligibility';
    description: '';
  };
  attributes: {
    gender: Schema.Attribute.Enumeration<['male', 'female', 'all']>;
    class: Schema.Attribute.JSON;
    marks: Schema.Attribute.Enumeration<
      [
        'Greater than 50%',
        'Greater than 60%',
        'Greater than 70%',
        'Greater than 80%',
        'Greater than 90%',
        'Not Applicable',
      ]
    >;
    attendance: Schema.Attribute.Enumeration<
      [
        'Greater than 50%',
        'Greater than 60%',
        'Greater than 70%',
        'Greater than 80%',
        'Greater than 90%',
        'Not Applicable',
      ]
    >;
    min_qualification: Schema.Attribute.Enumeration<
      ['Undergrade', 'Post Grad', 'PHD', 'Not Applicable']
    >;
    field_of_study: Schema.Attribute.JSON;
    annual_income: Schema.Attribute.Enumeration<
      [
        'Below \u20B91,00,000',
        'Rs 1,00,001 - Rs 2,50,000',
        'Rs 2,50,001 - Rs 5,00,000',
        'Rs 5,00,001 - Rs 7,50,000',
      ]
    >;
    caste: Schema.Attribute.JSON;
    disability: Schema.Attribute.Boolean;
    student_type: Schema.Attribute.Enumeration<
      ['Day Scholar', 'Hostler', 'Both', 'Not Applicable']
    >;
    age: Schema.Attribute.Enumeration<
      [
        'From 5 years - 8 years',
        'From 9 years - 10 years',
        'From 11 years - 13 years',
        'From 14 years - 16 years',
        'From 16 years - 18 years',
        'Not Applicable',
      ]
    >;
    eligible_children_limit: Schema.Attribute.Enumeration<
      ['Only 1', 'Only 2', 'Only 3', 'Not applicable']
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'composite-attributes.financial-information': CompositeAttributesFinancialInformation;
      'composite-attributes.eligibility': CompositeAttributesEligibility;
    }
  }
}
