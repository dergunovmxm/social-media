import cn from "clsx";
import { Eye, EyeOff } from "lucide-react";
import { HTMLInputTypeAttribute, forwardRef, useState } from "react";
import { TypeInputProps } from "./field.types";

const Field = forwardRef<HTMLInputElement, TypeInputProps>(
  ({ error, style, Icon, className, ...rest }, ref) => {
    return (
      <div className={cn(styles.field, className)} style={style}>
        {Icon && (
          <div className={styles.fiels}>
            <Icon />
          </div>
        )}
        <input ref={ref} {...rest} />
        {error && <div className={styles.error}>{error.message}</div>}
      </div>
    );
  })
);
