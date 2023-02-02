import clsx from 'clsx';

export function Input({ className = '', type, variant, ...props }) {
  const variants = {
    search:
      'bg-transparent px-0 py-2 text-heading w-full focus:ring-0 transition ',
    minisearch:
      'bg-transparent hidden md:inline-block text-left appearance-none pr-0 py-1 focus:ring-transparent placeholder:opacity-20 placeholder:text-[#0f172a]',
  };

  const styles = clsx(variants[variant], className);

  return <input type={type} {...props} className={styles} />;
}
