import type { Struct, Schema } from '@strapi/strapi';

export interface CompositeAttributesSponsor extends Struct.ComponentSchema {
  collectionName: 'components_composite_attributes_sponsors';
  info: {
    displayName: 'sponsor';
  };
  attributes: {
    sponsor_name: Schema.Attribute.String;
    entity_type: Schema.Attribute.Enumeration<
      ['Central govt', 'State govt', 'PSU', 'Private']
    >;
    share_percent: Schema.Attribute.Integer;
  };
}

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
    max_bebeficiary: Schema.Attribute.Integer;
    amt_per_beneficiary: Schema.Attribute.Component<
      'composite-attributes.amt-per-beneficiary',
      true
    >;
  };
}

export interface CompositeAttributesFieldOfStudy
  extends Struct.ComponentSchema {
  collectionName: 'components_composite_attributes_field_of_studies';
  info: {
    displayName: 'field-of_study';
  };
  attributes: {
    field: Schema.Attribute.Enumeration<
      ['Engineering', 'Medical', 'Management', 'Other', 'All', 'Not Applicable']
    >;
  };
}

export interface CompositeAttributesEligibility extends Struct.ComponentSchema {
  collectionName: 'components_composite_attributes_eligibilities';
  info: {
    displayName: 'eligibility';
    description: '';
  };
  attributes: {
    gender: Schema.Attribute.Enumeration<['male', 'female', 'all gender']>;
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
    annual_income: Schema.Attribute.Enumeration<
      [
        'Below \u20B91,00,000',
        'Rs 1,00,001 - Rs 2,50,000',
        'Rs 2,50,001 - Rs 5,00,000',
        'Rs 5,00,001 - Rs 7,50,000',
      ]
    >;
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
    caste: Schema.Attribute.Component<'composite-attributes.caste', true>;
    field_of_study: Schema.Attribute.Component<
      'composite-attributes.field-of-study',
      true
    >;
    class: Schema.Attribute.Component<'composite-attributes.class', true>;
    domicile: Schema.Attribute.Enumeration<
      [
        'All',
        'Andhra Pradesh',
        'Arunachal Pradesh',
        'Assam',
        'Bihar',
        'Chhattisgarh',
        'Goa',
        'Gujarat',
        'Haryana',
        'Himachal Pradesh',
        'Jharkhand',
        'Karnataka',
        'Kerala',
        'Madhya Pradesh',
        'Maharashtra',
        'Manipur',
        'Meghalaya',
        'Mizoram',
        'Nagaland',
        'Odisha',
        'Punjab',
        'Rajasthan',
        'Sikkim',
        'Tamil Nadu',
        'Telangana',
        'Tripura',
        'Uttar Pradesh',
        'Uttarakhand',
        'West Bengal',
      ]
    >;
  };
}

export interface CompositeAttributesClass extends Struct.ComponentSchema {
  collectionName: 'components_composite_attributes_classes';
  info: {
    displayName: 'class';
  };
  attributes: {
    class: Schema.Attribute.Integer;
  };
}

export interface CompositeAttributesCaste extends Struct.ComponentSchema {
  collectionName: 'components_composite_attributes_castes';
  info: {
    displayName: 'caste';
  };
  attributes: {
    caste_name: Schema.Attribute.Enumeration<['sc', 'st', 'general', 'obc']>;
  };
}

export interface CompositeAttributesAmtPerBeneficiary
  extends Struct.ComponentSchema {
  collectionName: 'components_composite_attributes_amt_per_beneficiaries';
  info: {
    displayName: 'amt_per_beneficiary';
    description: '';
  };
  attributes: {
    caste: Schema.Attribute.Enumeration<['sc', 'st', 'general', 'obc']>;
    type: Schema.Attribute.Enumeration<['Dayscholar', 'Hostler']>;
    category: Schema.Attribute.Enumeration<['male', 'female', 'disabled']>;
    amount: Schema.Attribute.Decimal;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'composite-attributes.sponsor': CompositeAttributesSponsor;
      'composite-attributes.financial-information': CompositeAttributesFinancialInformation;
      'composite-attributes.field-of-study': CompositeAttributesFieldOfStudy;
      'composite-attributes.eligibility': CompositeAttributesEligibility;
      'composite-attributes.class': CompositeAttributesClass;
      'composite-attributes.caste': CompositeAttributesCaste;
      'composite-attributes.amt-per-beneficiary': CompositeAttributesAmtPerBeneficiary;
    }
  }
}
