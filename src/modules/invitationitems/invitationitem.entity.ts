import { Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Item } from "../items/item.entity";
import { Invitation } from "../invitations/invitation.entity";
import { BelongsTo } from "sequelize-typescript/dist/associations/belongs-to/belongs-to";

@Table
export class InvitationItem extends Model<InvitationItem> {
    @ForeignKey(() => Item)
    @Column
    item_id: number;

    @BelongsTo(() => Item)
    item:Item

    @ForeignKey(() => Invitation)
    @Column
    invitation_id: number;

    @BelongsTo(() => Invitation)
    invitation:Invitation
}