import { Dropzone } from "@mantine/dropzone";
import useSWRMutation from "swr/mutation";

async function uploadDocuments(url, { arg }) {
  const body = new FormData();
  arg.files.forEach((file) => {
    body.append("file", file, file.name);
  });

  const response = await fetch(url, { method: "POST", body });
  return await response.json();
}

export function FilePicker() {
  // when uploading a document, there seems to be a slight delay, so wait ~1s
  // before refreshing the list of documents `mutate("/api/documents")`.
  const { trigger } = useSWRMutation("/api/documents", uploadDocuments);

  return (
    <Dropzone onDrop={(files) => trigger({ files })}>
      {/* Add additional Dropzone props or children here */}
    </Dropzone>
  );
}
