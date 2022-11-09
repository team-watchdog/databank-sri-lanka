import "@uiw/react-markdown-preview/markdown.css";
import "@uiw/react-md-editor/markdown-editor.css";
import { useFormik } from 'formik';
import dynamic from "next/dynamic";
import { useState } from "react";

// components
import { FileUpload } from '../components/FileUpload';
import { FormItem } from '../components/Form';
import { InputText } from '../components/Input';
import { PageHeader } from '../components/PageHeader';
import { TagInput } from '../components/TagInput';

// styles
import Button from "../components/Button";
import styles from '../styles/Home.module.css';

const MDEditor = dynamic(
    () => import("@uiw/react-md-editor"),
    { ssr: false }
);

interface MetadataForm{
    title: string;
    summary: string;
    tags: string[];
    notes: string;
}

export default function MetadataGenerator() {
  const [value, setValue] = useState<string | null>("**Hello world!!!**");

  const { values, submitForm, setFieldValue } = useFormik({
    initialValues: {
    } as MetadataForm,
    onSubmit: (values) => {
        navigator.clipboard.writeText(JSON.stringify(values));
        alert(JSON.stringify(values, null, 2));
    },
  });

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
                        <FileUpload 
                            onUpload={(file) => {
                                const reader = new FileReader();
                                reader.onload = (e) => {
                                    const text = e.target?.result;
                                    if (text) {
                                        try {
                                            const json = JSON.parse(text as string);
                                            setFieldValue("title", json.title);
                                            setFieldValue("summary", json.summary);
                                            setFieldValue("tags", json.tags);
                                            setFieldValue("notes", json.notes);
                                        } catch (e) {
                                            alert("Error parsing file");
                                        }
                                    }
                                };
                                reader.readAsText(file);
                            }}
                        />
                    </div>
                    <FormItem
                        label="Dataset Title"
                        required
                    >
                        <InputText 
                            value={values.title}
                            onChange={(value) => {
                                setFieldValue('title', value);
                            }}
                        />
                    </FormItem>
                    <FormItem
                        label="Dataset Summary"
                        required
                    >
                        <InputText 
                            value={values.summary}
                            onChange={(value) => {
                                setFieldValue('summary', value);
                            }}
                        />
                    </FormItem>
                    <FormItem
                        label="Tags"
                        required
                    >
                        <TagInput 
                            values={values.tags}
                            onChange={(values) => {
                                setFieldValue('tags', values);
                            }}
                            placeholder="Add a tag"
                        />
                    </FormItem>
                    <FormItem
                        label="Notes"
                        description="Include detailed description about the dataset, links to the original datases, and extraction methodology"
                    >
                        <MDEditor 
                            value={values.notes ?? undefined} 
                            onChange={(value) => {
                                setFieldValue('notes', value);
                            }} 
                            height={600}
                        />
                    </FormItem>
                    <FormItem label={"Output JSON"}>
                        <div className="py-4 px-4 bg-blue-50 rounded-md w-full">
                            <code className="whitespace-pre-wrap">{JSON.stringify(values, null, 2)}</code>
                            <Button type="default" onMouseDown={async () => {
                                try {
                                    await navigator.clipboard.writeText(JSON.stringify(values));
                                    alert('JSON copied to clipboard');
                                  } catch (err) {
                                    console.error('Failed to copy: ', err);
                                  }
                            }}>Copy to Clipboard</Button>
                        </div>
                    </FormItem>
                </div>
            </div>
        </div>
    )
}