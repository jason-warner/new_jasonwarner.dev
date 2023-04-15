import Layout from "@component/components/layout"
import { TextWrapper } from "@component/components/utils/TextWrapper"

export default function aboutMe() {

    return (
        <Layout>
            <Layout.Page title="About Me">
                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <TextWrapper size="md" >
                            Origin
                        </TextWrapper>
                        <TextWrapper size="xs">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </TextWrapper>
                    </div>
                </div>
            </Layout.Page>
        </Layout>
    )
}