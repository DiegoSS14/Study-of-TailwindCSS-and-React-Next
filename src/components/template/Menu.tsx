import { Activity, ArrowUpSquare, Box, Compass, Container, Diameter, GraduationCap, MailWarningIcon, MousePointerClick, PanelTopDashedIcon, PlaneTakeoff, RulerDimensionLine } from "lucide-react";
import GroupMenu from "./GroupMenu";
import MenuItem from "./MenuItem";
import UserInfo from "./UserInfo";
import Logo from "./Logo";

export default function Menu() {
    return (
        <div className="w-72 h-screen flex flex-col bg-zinc-200 dark:bg-zinc-900 p-7 gap-7">
            <Logo classname="text-zinc-700 bg-zinc-200 dark:text-zinc-400 dark:bg-zinc-900" />
            <div className="flex-1 flex flex-col w-full gap-7 overflow-y-scroll pb-20">
                <GroupMenu title="Flex">
                    <MenuItem icon={Activity} title="Box Sizing" link="/flex/boxsizing"></MenuItem>
                    <MenuItem icon={Compass} title="Components" link="/flex/components"></MenuItem>
                    <MenuItem icon={Diameter} title="Flex" link="/flex/flex"></MenuItem>
                    <MenuItem icon={MailWarningIcon} title="Margin" link="/flex/margin"></MenuItem>
                    <MenuItem icon={PanelTopDashedIcon} title="Padding" link="/flex/padding"></MenuItem>
                    <MenuItem icon={RulerDimensionLine} title="Redimensionamento" link="/flex/redimensionamento"></MenuItem>
                    <MenuItem icon={Box} title="Responsive" link="/flex/responsive"></MenuItem>
                    <MenuItem icon={PlaneTakeoff} title="Space" link="/flex/space"></MenuItem>
                </GroupMenu>
                <GroupMenu title="Grid">
                    <MenuItem icon={MousePointerClick} title="Inicial" link="/grid/inicial"></MenuItem>
                    <MenuItem icon={ArrowUpSquare} title="Positional" link="/grid/positional"></MenuItem>
                </GroupMenu>
                <GroupMenu title="Extra">
                    <MenuItem icon={Container} title="Container" link="/extra/container"></MenuItem>
                    <MenuItem icon={GraduationCap} title="Gradient" link="/extra/gradient"></MenuItem>
                </GroupMenu>
            </div>
            <UserInfo
                name="Diego Sousa"
                email="diegosousa@gmail.com"
                className="fixed bottom-0 left-0 bg-zinc-200 dark:bg-zinc-900 w-72"
            />
        </div>
    )
}