import { IContainer, SimpleContainerBuilder } from "rfluxx";
import { AppStore } from "../stores/AppStore";

/**
 * Singleton container factory for creating and managing store dependencies.
 */
export class ContainerFactory {
    /**
     * Container.
     */
    public static container: IContainer;

    /**
     * Creates if needed, and returns the container.
     */
    public static getContainer = (): IContainer => {
        if (ContainerFactory.container === undefined || ContainerFactory.container === null) {

            const builder = new SimpleContainerBuilder();

            builder.register(c => new AppStore({})).as("AppStore");

            ContainerFactory.container = builder.build();
        }

        return ContainerFactory.container;
    }
}