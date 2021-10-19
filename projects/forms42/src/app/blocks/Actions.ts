import { alias, Block, table, column, key, Column } from "forms42";

@alias("actions")
@table({name: "order_actions", order: "id"})

@column({name: "id"                        , type: Column.integer })
@column({name: "orad_id"                   , type: Column.integer })
@column({name: "action_type"               , type: Column.varchar })
@column({name: "action_location_type"      , type: Column.varchar })
@column({name: "order_type"                , type: Column.varchar })
@column({name: "order_sub_type"            , type: Column.varchar })
@column({name: "order_source"              , type: Column.varchar })
@column({name: "order_reference"           , type: Column.varchar })
@column({name: "name"                      , type: Column.varchar })
@column({name: "additional_name"           , type: Column.varchar })
@column({name: "abol_id"                   , type: Column.integer })
@column({name: "ordf_id"                   , type: Column.integer })
@column({name: "prpd_id"                   , type: Column.integer })
@column({name: "quantity"                  , type: Column.integer })
@column({name: "additional_delivery_code"  , type: Column.integer })
@column({name: "additional_delivery_text"  , type: Column.varchar })
@column({name: "order_label"               , type: Column.varchar })
@column({name: "dimension_1"               , type: Column.decimal })
@column({name: "dimension_2"               , type: Column.decimal })
@column({name: "dimension_3"               , type: Column.decimal })
@column({name: "weight"                    , type: Column.integer })
@column({name: "size_category"             , type: Column.varchar })
@column({name: "distribution_date_planned" , type: Column.datetime})
@column({name: "eta_planned"               , type: Column.datetime})
@column({name: "action_date_time"          , type: Column.datetime})
@column({name: "action_longitude"          , type: Column.varchar })
@column({name: "action_latitude"           , type: Column.varchar })
@column({name: "action_swipe_distance"     , type: Column.integer })
@column({name: "distribution_distributor"  , type: Column.varchar })
@column({name: "distribution_area"         , type: Column.varchar })
@column({name: "distribution_profile"      , type: Column.integer })
@column({name: "distribution_job"          , type: Column.integer })
@column({name: "access_information"        , type: Column.varchar })
@column({name: "mailpiece_id"              , type: Column.varchar })
@column({name: "elabel_code"               , type: Column.varchar })
@column({name: "box_id"                    , type: Column.varchar })
@column({name: "box_shelf"                 , type: Column.varchar })
@column({name: "pin_code"                  , type: Column.varchar })
@column({name: "barcode_type"              , type: Column.varchar })
@column({name: "barcode"                   , type: Column.varchar })
@column({name: "distributed_by"            , type: Column.varchar })
@column({name: "invoice_by"                , type: Column.varchar })
@column({name: "cancelled"                 , type: Column.varchar })
@column({name: "oprettet_dato"             , type: Column.datetime})
@column({name: "oprettet_af"               , type: Column.varchar })
@column({name: "rettet_dato"               , type: Column.datetime})
@column({name: "rettet_af"                 , type: Column.varchar })



export class actions extends Block
{
}