/* Ce fichier doit être généré automatiquement */

import {EntityToType, StoreNode} from "@focus4/stores";
import {DO_DATE, DO_ID} from "../../domains";
import {EvenementEntity} from "./evenement";

export type Suivi = EntityToType<typeof SuiviEntity>;
export type SuiviNode = StoreNode<typeof SuiviEntity>;

export const SuiviEntity = {
    name: "suivi",
    fields: {
        dateCreation: {
            type: "field",
            fieldType: "string",
            name: "dateCreation",
            domain: DO_DATE,
            isRequired: true,
            label: "suivi.dateCreation"
        },
        nombreEvenement: {
            type: "field",
            fieldType: "number",
            name: "nombreEvenement",
            domain: DO_ID,
            isRequired: true,
            label: "suivi.nombreEvenement"
        },
        evenementList: {
            type: "list",
            entity: EvenementEntity
        }
    }
} as const;
