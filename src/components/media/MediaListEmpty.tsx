"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInbox,
  type IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { ReactNode } from "react";
import Spinner from "../ui/Spinner";
import Matcha from "../brand/Matcha";
import { motion } from "framer-motion";
import { fadeInUp } from "@/src/libs/motion";

interface MediaListEmptyProps {
  title?: string;
  message?: string;
  isLoading?: boolean;
  icon?: IconDefinition;
  action?: ReactNode;
}

export default function MediaListEmpty({
  isLoading = false,
  title = "Nothing to show",
  message = "Add some content and come back later.",
  icon = faInbox,
  action,
}: MediaListEmptyProps) {
  return (
    <motion.div
      {...fadeInUp}
      className="w-full h-full flex flex-col justify-center items-center gap-4 py-12 px-6 text-center"
    >
      {isLoading ? (
        <Spinner size="lg" />
      ) : (
        <>
          {/* The mascot, with what's empty as a badge at its side */}
          <div className="relative">
            <div className="absolute inset-2 rounded-full bg-primary/20 blur-2xl" />
            <Matcha className="relative w-24" />
            <span className="absolute bottom-1 -right-1 size-8 rounded-full bg-surface-elevated border border-border flex items-center justify-center shadow-card">
              <FontAwesomeIcon icon={icon} className="text-xs text-primary" />
            </span>
          </div>
          <div>
            <h2 className="text-lg font-bold tracking-tight text-text">
              {title}
            </h2>
            <p className="mt-1 text-sm text-text-muted max-w-xs">{message}</p>
          </div>
          {action}
        </>
      )}
    </motion.div>
  );
}
