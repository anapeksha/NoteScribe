interface INotes {
  id: string;
  title: string;
  note: string;
  isArchived?: boolean;
  isDeleted?: boolean;
  createdAt: Date;
  deletedAt?: Date;
}

export default INotes;
