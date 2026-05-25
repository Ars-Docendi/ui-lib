import { useRef, useState, type DragEvent, type ReactNode } from "react";
import { cx } from "../../utils/cx";
import { IconUpload, IconFile } from "../icons/icons";

export type FileUploadStatus = "uploaded" | "uploading" | "error";

export interface UploadedFile {
  id: string;
  name: string;
  size?: string;
  status?: FileUploadStatus;
  progress?: number;
  error?: ReactNode;
}

export interface FileUploadProps {
  files?: UploadedFile[];
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  error?: boolean;
  title?: ReactNode;
  hint?: ReactNode;
  onFilesAdded?: (files: FileList) => void;
  onRemove?: (id: string) => void;
  className?: string;
  id?: string;
  name?: string;
}

export function FileUpload({
  files = [],
  accept,
  multiple,
  disabled,
  error,
  title,
  hint,
  onFilesAdded,
  onRemove,
  className,
  id,
  name,
}: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [dragging, setDragging] = useState(false);

  const openPicker = () => {
    if (disabled) return;
    inputRef.current?.click();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    if (disabled) return;
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onFilesAdded?.(e.dataTransfer.files);
    }
  };

  return (
    <div className={className}>
      <div
        className={cx("adoc-dropzone", dragging && "dragging", error && "error")}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled || undefined}
        onClick={openPicker}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openPicker();
          }
        }}
        onDragOver={(e) => {
          e.preventDefault();
          if (!disabled) setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
      >
        <IconUpload className="ico" />
        <div className="title">{title ?? "Hacé clic para subir o arrastrá los archivos"}</div>
        {hint && <div className="sub">{hint}</div>}
        <input
          ref={inputRef}
          id={id}
          name={name}
          type="file"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          style={{ display: "none" }}
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              onFilesAdded?.(e.target.files);
            }
            e.target.value = "";
          }}
        />
      </div>

      {files.length > 0 && (
        <div className="adoc-file-list">
          {files.map((f) => {
            const status = f.status ?? "uploaded";
            return (
              <div key={f.id} className={cx("adoc-file-row", status !== "uploaded" && status)}>
                <IconFile className="ico" />
                <span className="name">{f.name}</span>
                {f.size && <span className="size">{f.size}</span>}
                {onRemove && (
                  <button
                    type="button"
                    className="remove"
                    aria-label={`Quitar ${f.name}`}
                    onClick={() => onRemove(f.id)}
                  >
                    ×
                  </button>
                )}
                {status === "uploading" && (
                  <div className="adoc-file-progress" style={{ width: "100%" }}>
                    <i style={{ width: `${Math.min(100, Math.max(0, f.progress ?? 0))}%` }} />
                  </div>
                )}
                {status === "error" && f.error && (
                  <div style={{ width: "100%", fontSize: 12 }}>{f.error}</div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
