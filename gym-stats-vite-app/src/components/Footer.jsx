export default function Footer() {
    return (
        <footer className="bg-black text-gray-400 py-8 px-4 pt-10">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between">
                <div>
                    <div className="font-extrabold text-2xl mb-4">Gym Stats</div>
                    <div className="flex gap-4 mb-4">
                        <a href="#"><i className="fab fa-facebook-f" /></a>
                        <a href="#"><i className="fab fa-linkedin-in" /></a>
                        <a href="#"><i className="fab fa-instagram" /></a>
                        <a href="#"><i className="fab fa-youtube" /></a>
                    </div>
                </div>
                <div className="flex-1 flex gap-16 justify-end">
                    {[0,1,2].map(idx => (
                        <div key={idx}>
                            <div className="font-semibold mb-2">Topic</div>
                            <div className="space-y-1">
                                <div>Page</div>
                                <div>Page</div>
                                <div>Page</div>
                                <div>Page</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
}