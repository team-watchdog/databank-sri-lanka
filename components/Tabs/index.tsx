import { FunctionComponent, ReactNode } from "react";
import { Tab } from "@headlessui/react";

interface TabItem{
    title: string;
    component: ReactNode | ReactNode[] | string;
}

interface TabsProps{
    tabs: TabItem[];
}

export const Tabs: FunctionComponent<TabsProps> = (props) => {
    const { tabs } = props;

    return (
        <Tab.Group>
            <Tab.List className="flex gap-6 pt-4 pb-2">
                {tabs.map((tab, i) => (
                    <Tab className="font-bold -mx-2" key={i}>
                        {({ selected }) => (
                            <div className={`px-2 pb-1 box-content border-b-4 ${selected ? "border-b-primary-color text-primary-color" : "border-b-transparent"}`}>{tab.title}</div>
                        )}
                    </Tab>
                ))}
            </Tab.List>
            <Tab.Panels className={"py-4"}>
                {tabs.map((tab, i) => (
                    <Tab.Panel key={i}>
                        {tab.component}
                    </Tab.Panel>
                ))}
            </Tab.Panels>
        </Tab.Group>
    )
}
