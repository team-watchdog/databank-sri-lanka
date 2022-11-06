// components
import { PageHeader } from '../components/PageHeader';
import { FormItem } from '../components/Form';
import { FileUpload } from '../components/FileUpload';
import { TagInput } from '../components/TagInput';
import { InputText } from '../components/Input';


// styles
import styles from '../styles/Home.module.css';

export default function MetadataGenerator() {
    return (
        <div className={styles.container}>
            <div className="py-4">
                <PageHeader 
                    title="Generate meta.json for your dataset"
                    description="The meta.json file is how we store metadata about your dataset. You can generate or edit meta.json files using this tool."
                    actions={(
                        <div></div>
                    )}
                />
                <div className="py-4">
                    <div className="py-4 px-4 rounded-md bg-indigo-100 mb-8 flex flex-col gap-y-2">
                        <h4 className="text-lg font-semibold">Want to edit an existing meta.json file? Upload your file here.</h4>
                        <FileUpload />
                    </div>
                    <FormItem
                        label="Dataset Name"
                        required
                    >
                        <InputText 
                        />
                    </FormItem>
                    <FormItem
                        label="Dataset Summary"
                        required
                    >
                        <InputText 
                        />
                    </FormItem>
                    <FormItem
                        label="Tags"
                        required
                    >
                        <TagInput 
                            values={[
                                "Education",
                                "Health",
                            ]}
                            placeholder="Add a tag"
                        />
                    </FormItem>
                </div>
            </div>
        </div>
    )
}