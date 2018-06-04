export class NdcProduct {
  constructor(
    public id: number,
    public product_id: string,
    public product_ndc: string,
    public product_type_name: string,
    public proprietary_name: string,
    public proprietary_name_suffix: string,
    public non_proprietary_name: string,
    public dosage_form_name: string,
    public route_name: string,
    public start_marketing_date: string,
    public end_marketing_date: string,
    public marketing_category_name: string,
    public application_number: string,
    public labeler_name: string,
    public substance_name: string,
    public active_numerator_strength: string,
    public active_ingred_unit: string,
    public pharm_classes: string,
    public dea_schedule: string,
    public ndc_exclude_flag: string,
    public listing_record_certified_through: string
  ) {}
}
