import { Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Item } from "../items/item.entity";
import { Invitation } from "../invitations/invitation.entity";

@Table
export class InvitationItem extends Model<InvitationItem> {
    @ForeignKey(() => Item)
    @Column
    item_id: number;

    @ForeignKey(() => Invitation)
    @Column
    invitation_id: number;
}